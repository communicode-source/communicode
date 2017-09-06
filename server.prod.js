import ejs from 'ejs';
import Express from 'express';
import path from 'path';
import httpsRedirect from 'express-https-redirect';
import compression from 'compression';
import Promise from 'bluebird';

const renderFile = Promise.promisify(ejs.renderFile);

const runServer = () => {
    const flattenRoutes = (routes, base, paths) => {
        return routes.reduce((paths, route) => {
            let path = route.path === '*' ? route.staticName || 'nomatch' : route.path;
            path = /^\//.test(path) ? path : base + path;
            if(!route.staticExclude) {
                paths.push(path);
            }
            if(route.childRoutes) {
                const nextBase = /\/$/.test(path) ? path : path + '/';
                return flattenRoutes(route.childRoutes, nextBase, paths);
            }
            return paths;
        }, paths || []);
    };

    const app = Express();

    app.use(compression());
    app.use((req, res, next) => {
        const host = req.get('Host');
        // We like the domain without www more so let's use it!
        if(host.startsWith('www.')) {
            return res.redirect(301, 'https://communicode.co/' + req.originalUrl);
        }
        return next();
    });
    app.use('/', httpsRedirect());
    app.use('/assets', Express.static('assets', {
        // We can set such a high expiration date because assets have filename hashes
        maxAge: '1y'
    }));
    // Workaround for 404 error
    app.get('/fonts/*', (req, res) => {
        return res.redirect(301, 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0' + req.originalUrl);
    });
    app.get('/sitemap.xml', (req, res) => {
        res.sendFile('sitemap.xml', {root: '.'});
    });
    app.get('*', async(req, res) => {
        const html = await renderFile(path.join(__dirname + 'index.ejs.html'), {
            app: {
                html: '',
                title: 'Communicode'
            }
        });
        res.status(200).send(html);
    });

    const server = app.listen(process.env.PORT || 8080, () => {
        const host = server.address().address;
        const port = server.address().port;
        console.log(`Server listening at ${host}:${port}`);
    });
};

if(path.basename(process.argv[1]) === 'server.bundle.js') {
    runServer();
}
