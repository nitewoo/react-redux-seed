import path from 'path'
import express from 'express'
import compression from 'compression';
import servefavicon from 'serve-favicon'
import serveStatic from 'serve-static'
import proxy from 'proxy-middleware'
import url from 'url'


const app = express();

const staticPath = path.resolve(path.join(__dirname, '..', 'static'))
const faviconPath = path.join(staticPath, 'favicon.ico')
const indexPath = path.join(staticPath, 'index.html')

app.use(compression());
app.use(servefavicon(faviconPath));
app.use(serveStatic(staticPath));

app.get('/*', function(req, res) {
    res.sendFile(indexPath)
});

app.listen(6060);
console.info('prod-server http://localhost:6060 is on');