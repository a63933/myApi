const express = require('express');

const testRouter = express.Router();

testRouter.get('/getTime', (req, res) => {
  res.send(+new Date() + '')
})

testRouter.get('/getRandomString', (req, res) => {
  let rs = req.query.word || 'a'
  while (rs.length < 10) {
    rs += rs
  }
  res.send(rs)
})

testRouter.get('/getRandomStringDelay', (req, res) => {
  let rs = req.query.word || 'a'
  while (rs.length < 10) {
    rs += rs
  }
  function getNum(num){
    return num <= 2 ? num : getNum(num - 1) + getNum(num - 2)
  }
  rs += getNum(42)
  res.send(rs)
})

module.exports = testRouter
