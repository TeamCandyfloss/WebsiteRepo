var express = require('express');
var router = express.Router();

router.get('/forecast', function(req, res) {

  res.render('forecast', {
    pageTitle: 'Forecast',
    pageID: 'forecast'
  });
});

module.exports = router;
