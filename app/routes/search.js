var express = require('express');
var router = express.Router();

router.get('/search', function(req, res) {

  res.render('search', {
    pageTitle: 'Search',
    pageID: 'search'
  });

});

module.exports = router;
