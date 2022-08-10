const express = require('express')
const app = express()
const port = 3000

// dường dẫnnò
app.get('/trang-chu', (req, res) => {

    var x=1;
    var y=2;
    var z =x+y;


  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})