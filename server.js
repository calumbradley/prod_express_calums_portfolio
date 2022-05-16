const express = require('express')
const path = require('path')

require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'build')))
// Body Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/api', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
