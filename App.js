const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./config/db');

connectDB();
app.get('/test', function(req, res) {
  res.send('hello world');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

