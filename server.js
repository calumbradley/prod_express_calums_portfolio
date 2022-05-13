const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Node JS')
})

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})