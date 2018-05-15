var express = require('express');
var router = express.Router();

router.get('/comparedate', function(req, res) {

  res.render('comparedate', {
    pageTitle: 'CompareDate',
    pageID: 'comparedate'
  });

});

module.exports = router;
