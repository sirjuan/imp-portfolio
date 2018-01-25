const express = require('express')
const next = require('next')
const chokidar = require('chokidar')
const { writer, remover, compareDirs } = require('./serverUtils')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 3000;
const handle = app.getRequestHandler()

/*  Next.js does not support importing markdown files into
 *  React components when server rendering. Chokidar monitors
 *  /markdown directory for markdown files and converts them
 *  to Javascript functions that return markdown string
 */

chokidar.watch('./markdown', { ignoreInitial: true })
  .on('ready', compareDirs)
  .on('add', writer)
  .on('change', writer)
  .on('unlink', remover);

app.prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`Ready on ${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
