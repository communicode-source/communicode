import React from 'react';
import { renderToString } from 'react-dom/server';
import routes from './app/routes.js';
import { match, RouterContext, createRoutes } from 'react-router';
import { flushTitle } from 'react-title-component';
import ejs from 'ejs';
import Express from 'express';
import path from 'path';
import sm from 'sitemap';

const app = Express();

app.use('/assets', Express.static('assets'));
const paths = flattenRoutes(createRoutes(routes));
const sitemapOptions = {
    hostname: 'https://communicode.co',
    cacheTime: 600000, // Five minute cache period
};
// todo: create sitemap override files
sitemapOptions.urls = paths.map((path) => ({
    url: path,
    changefreq: 'daily'
}));
const sitemap = sm.createSitemap(sitemapOptions);

app.get('/sitemap.xml', (req, res) => {
    sitemap.toXML((err, xml) => {
        if(err) {
            res.status(500).send(err);
        }
        res.header('Content-Type', 'application/xml');
        res.send(xml);
    });
});


app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
        if(err) {
            res.status(500).send(err.message);
        }
        else if(redirect) {
            res.redirect(redirect.pathname + redirect.search);
        }
        else if(props) {
            let statusCode = 200;
            if(props.routes[1].path === '*') {
                statusCode = 404;
            }
            const appHtml = renderToString(<RouterContext {...props}/>);
            const title = flushTitle();
            ejs.renderFile(path.join(__dirname + 'index.ejs.html'), {
                app: {
                    html: appHtml,
                    title: title
                }
            }, (err2, data) => {
                if(err2) {
                    res.status(500).send(err2.message);
                }
                res.status(statusCode).send(data);
            });
        }
        else {
            res.status(404).send('Page not found!');
        }
    });
});

const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Server listening at ${host}:${port}`);
});

function flattenRoutes(routes, base, paths) {
    return routes.reduce((paths, route) => {
        let path = route.path === '*' ? route.staticName || 'nomatch' : route.path;
        path = /^\//.test(path) ? path : base + path;
        if (!route.staticExclude) { paths.push(path) }
        if (route.childRoutes) {
            const nextBase = /\/$/.test(path) ? path : path + '/';
            paths = flattenRoutes(route.childRoutes, nextBase, paths)
        }
        return paths;
    }, paths || []);
}
