import webpack from 'webpack'
import webDevServerConfig from '../webpack/dev.config'

import express from 'express'
import compression from 'compression'
import proxy from 'proxy-middleware'
import servefavicon from 'serve-favicon'
import serveStatic from 'serve-static'
import path from 'path'
import url from 'url'
import httpProxy from 'http-proxy'

import serverConfig from './config'

// -------- config ----------------------
const { host, apiPort, devPort, webpackDevServerPort } = serverConfig

// -------- dev-server ----------------------
const app = express()
const apiProxy = httpProxy.createProxyServer({
  target: 'http://' + host + ':' + apiPort
})


const staticPath = path.resolve(path.join(__dirname, '..', 'static'))
const faviconPath = path.join(staticPath, 'favicon.ico')
const indexPath = path.join(staticPath, 'index.html')

app.use(compression())
app.use(servefavicon(faviconPath))

// proxy the request for static assets
app.use('/assets', proxy(url.parse('http://' + host + ':' + webpackDevServerPort + '/assets')))

app.use(serveStatic(staticPath))

// Proxy to API server
app.use('/api', (req, res) => {
  apiProxy.web(req, res)
})

app.get('/*', function(req, res) {
  res.sendFile(indexPath)
})

// -------- run ----------------------
app.listen(devPort, err => {
  if (err) {
    console.error(err)
  }
  console.info('----\n==> 🎛  dev-server http://' + host + ':' + devPort + ' is on')
})
