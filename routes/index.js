var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

        res.render('Index', {
            title: 'Welcome to App'
        });

});

module.exports = router;
