var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    title: "Azure App Service",
    message: process.env.message || "Dev Environment"
  }
  res.render('index', data);
});

module.exports = router;
