var express = require('express');
var router = express.Router();

router.get('/alarms', function(req, res) {

  res.render('alarms', {
    pageTitle: 'Alarms',
    pageID: 'alarms'
  });

});

module.exports = router;
