const express = require('express');

const testRouter = express.Router();

testRouter.get('/getTime', (req, res) => {
  res.send(+new Date() + '')
})

testRouter.get('/getRandomString', (req, res) => {
  console.log(req.query.word)
  let res = req.query.word
  while (res.length < 10) {
    res += res
  }
  res.send(res)
})

module.exports = testRouter
