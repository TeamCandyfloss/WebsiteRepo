var express = require('express');
var router = express.Router();

router.get('/comparedate', function(req, res) {

  res.render('comparedate', {
    pageTitle: 'Compare Date',
    pageID: 'comparedate'
  });

});

module.exports = router;
