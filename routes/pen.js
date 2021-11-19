var express = require('express');
const pen_controlers= require('../controllers/pen');
var router = express.Router();
/* GET bottle */
router.get('/', pen_controlers.pen_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pen', { title: 'Search results for pen ' });
});

module.exports = router;
// GET request for one pen. 
router.get('/pen/:id', pen_controlers.pen_detail); 


/* GET detail pen page */ 
router.get('/detail', pen_controlers.pen_detail); 



/* GET create pen page */ 
router.get('/create', pen_controlers.pen_create_Page); 


/* GET create update page */ 
router.get('/update', pen_controlers.pen_update_Page); 


/* GET create pen page */ 
router.get('/delete', pen_controlers.pen_delete_Page); 
