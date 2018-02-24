const express = require('express')
const next = require('next')
const fetch = require('isomorphic-unfetch')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 3000
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/flickr/:tag', async (req, res) => {
      const { tag } = req.params
      const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&nojsoncallback=true`
      const response = await fetch(url)
      res.send(await response.json())
    })

    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`Ready on ${port}`) // eslint-disable-line no-console
    })
  })
  .catch((ex) => {
    console.error(ex.stack) // eslint-disable-line no-console
    process.exit(1)
  })
