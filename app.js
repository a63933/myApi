const express = require('express');
const testRouter = require('./router/test');

let app = express()
app.use('/test', testRouter)
app.get('/getTime', (req, res) => {
  console.log(req.body)
  res.send('testRouter')
})
app.use(function (req, res) {
    res.send('404 not found');
});

app.listen('2101')
