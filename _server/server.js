const express = require('express')
const path = require('path')
const Datastore = require('nedb')

require('dotenv').config()

const app = express()
db = new Datastore({ filename: './database/.db', autoload: true })

app.use(express.static(path.join(__dirname, 'build')))
// Body Parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.post('/api', (req, res) => {
  res.sendStatus(200)
  const data = req.body
  console.log(data);
  db.insert(data)
})



const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
