var express = require('express')
var router = express.Router()

var testsDb = require('../db/tests')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  testsDb.getTests(db)
    .then(tests => {
      res.json(tests)
    })
})

module.exports = router
