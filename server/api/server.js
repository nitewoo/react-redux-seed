import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import http from 'http'
import PrettyError from 'pretty-error'

import serverConfig from '../config'

import { mapUrl } from './utils/url'
import * as actions from './actions'

const { host, apiPort } = serverConfig

const app = express()
const server = new http.Server(app)

app.use(bodyParser.json())
const pretty = new PrettyError()

app.use((req, res) => {
  const splittedUrlPath = req.url.split('?')[0].split('/').slice(1)
  const { action, params } =  mapUrl(actions, splittedUrlPath)
  
  if (action) {
    action(req, params)
      .then(
        result => {
          res.json(result)
        }, 
        reason => {
          if (reason &&  reason.redirect) {
            res.redirect(reason.redirect)
          }
          else {
            console.error('API ERROR: ', pretty.render(reason))
            res.status(reason.status || 500).json(reason)
          }
        }
      )
  }
  else {
    res.status(404).end('NOT FOUND')
  }
})

app.listen(apiPort, err => {
  if (err) {
    console.error(err)
  }
  console.info('----\n==> 🌎  API is running on port %s', apiPort)
  console.info('==> 💻  Send requests to http://' + host + ':%s', apiPort)
})
