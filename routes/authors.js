var express = require('express');
var router = express.Router();

var sql = require('mssql');

var configDb = require('../config').config;


/* GET authors page. */
router.get('/authors', function(req, res, next) {
    var connection = new sql.Connection(configDb, function(err) {
        if (err) return next(err);

        // Query 
        var QueryString = "SELECT * FROM Author";
        var request = connection.request();
        request.query(QueryString, function(err, Authors) {
            if (err) return next(err);

            res.render('authors', {
                title: 'Authors',
                authors: Authors
            });

        });
    });
});

module.exports = router;
