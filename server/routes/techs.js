var express = require('express')
var router = express.Router()

var techsDb = require('../db/techs')

router.get('/', (req, res) => {
  let db = req.app.get('db')
  techsDb.getTechs(db)
    .then(techs => {
      res.json(techs)
    })
})

module.exports = router
