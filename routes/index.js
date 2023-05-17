var express = require('express');
var router = express.Router();

router.get('/', (req, res) =>{
    res.render("index");
})

router.get('/cloud', (req, res) =>{
  res.render("cloud");
})
router.get('/ucl', (req, res) =>{
  res.render("ucl");
})

module.exports = router;
