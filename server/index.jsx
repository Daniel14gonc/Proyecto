import path from 'path'

import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const PORT = process.env.PORT || 3000;
const app = express()

app.get('/', (req, res) => {
  const element = ReactDOMServer.renderToString(<App />)
  const html = `
    <html lang="en">
    <head>
        <title>Document</title>
        <link rel="stylesheet" type="text/css" href="/styles.css" />
    </head>
    <body style="margin: 0px;">
        <div id="root">${element}</div>
        <script src="/bundle.js"></script>
    </body>
    </html>
  `

  res.send(html)
})

app.use(express.static(path.join(__dirname, '../dist')))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
