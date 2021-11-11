var express = require('express');
const pen_controlers= require('../controllers/camera');
var router = express.Router();
/* GET bottle */
router.get('/', pen_controlers.pen_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pen', { title: 'Search results for pen ' });
});

module.exports = router;