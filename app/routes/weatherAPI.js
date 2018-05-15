var express = require('express');
var router = express.Router();

router.get('/weatherAPI', function(req, res) {

  res.render('weatherAPI', {
    pageTitle: 'Weather API',
    pageID: 'weatherAPI'
  });

});

module.exports = router;
