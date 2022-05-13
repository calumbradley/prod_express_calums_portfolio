const express = require('express')
const path = require('path');

require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5001


app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})


app.get('/api', function (req, res) {
  res.json({1: "json"})
});