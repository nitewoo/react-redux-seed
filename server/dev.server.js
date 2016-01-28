import webpack from 'webpack'
// import WebpackDevServer from 'webpack-dev-server'
import webDevServerConfig from '../webpack/dev.config'

import express from 'express'
import compression from 'compression';
import proxy from 'proxy-middleware'
import servefavicon from 'serve-favicon'
import serveStatic from 'serve-static'
import path from 'path'
import url from 'url'

// ------ webpack-dev-server ------------------
const webpackDevServerPort = webDevServerConfig.devServer.port


// -------- dev-server ----------------------
const app = express();

const devServerHost = 'localhost'
const devServerPort = 7070

const staticPath = path.resolve(path.join(__dirname, '..', 'static'))
const faviconPath = path.join(staticPath, 'favicon.ico')
const indexPath = path.join(staticPath, 'index.html')

app.use(compression());
app.use(servefavicon(faviconPath));

// proxy the request for static assets
app.use('/assets', proxy(url.parse('http://localhost:' + webpackDevServerPort + '/assets')));

app.use(serveStatic(staticPath));
app.get('/*', function(req, res) {
  res.sendFile(indexPath)
});

// -------- run ----------------------
app.listen(7070);
console.info('dev-server http://' + devServerHost + ':' + devServerPort + ' is on');