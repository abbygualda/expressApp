var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/ps3')
    .get((req,res,next) => {
        res.render('temp',{ string: `Welcome` })
});

router.get('/post', function(req, res, next) {
    const body = req.body;
    res.render('post', {res:body});
});

router.post('/post', function(req, res, next) {
    res.send(req.body);
});


module.exports = router;
