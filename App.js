const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./config/db');
// app.get('/', (req, res) => {
//   connectDB();
//   res.send('Hello World!')
// })
connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

