import React from 'react';
import { renderToString } from 'react-dom/server';
import routes from './app/routes.js';

import { match, createRoutes, RouterContext } from 'react-router';
import { flushTitle } from 'react-title-component';
import ejs from 'ejs';
import Express from 'express';
import path from 'path';
import httpsRedirect from 'express-https-redirect';
import compression from 'compression';
import Promise from 'bluebird';
import critical from 'critical';

const matchPath = Promise.promisify(match, {multiArgs: true});
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
    app.use('/', httpsRedirect());
    app.use('/assets', Express.static('assets'));

    const paths = flattenRoutes(createRoutes(routes));

    // Static pages!!
    paths.forEach((routePath) => {
        if(routePath === undefined || routePath === '/nomatch') {
            // skip these
        }
        else if(routePath === '/') {
            app.get('/', (req, res) => {
                // Don't use static because that would expose our server code
                res.sendFile('index.html', {root: '.'});
            });
        }
        else {
            app.use(routePath, Express.static(routePath.substr(1)));
        }
    });
    app.get('/sitemap.xml', (req, res) => {
        res.sendFile('sitemap.xml', {root: '.'});
    });
    app.get('*', async(req, res) => {
        let redirect;
        let props;
        try {
            [redirect, props] = await matchPath({routes: routes, location: req.url});
        }
        catch(err) {
            res.status(500).send(err.message);
        }
        if(redirect) {
            res.redirect(redirect.pathname + redirect.search);
        }
        else if(props) {
            let statusCode = 200;
            if(props.routes[1].path === '*') {
                statusCode = 404;
            }
            const appHtml = renderToString(<RouterContext {...props}/>);
            const title = flushTitle();
            let data;
            try {
                data = await renderFile(path.join(__dirname + 'index.ejs.html'), {
                    app: {
                        html: appHtml,
                        title: title
                    }
                });
            }
            catch(err) {
                res.status(500).send(err.message);
            }
            res.status(statusCode).send(data);
        }
        else {
            res.status(404).send('Page not found!');
        }
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

// Move this to a seperate file??
const render = async (locals) => {
    const [redirect, props] = await matchPath({routes: routes, location: locals.path});
    if(redirect) {
        return render(redirect.pathname);
    }
    else if(props) {
        if(props.routes[1].path === '*') {
            // 404 error
        }
        const appHtml = renderToString(<RouterContext {...props} />);
        const appTitle = flushTitle();
        const data = await renderFile(path.join(__dirname + 'dist/index.ejs.html'), {
            app: {
                html: appHtml,
                title: appTitle
            }
        });
        const criticalMarkup = await critical.generate({
            inline: true,
            html: data,
            base: './dist',
            minify: true,
            folder: './dist'
        });
        return await criticalMarkup.toString();
    }
    return '';
};

module.exports = render;
