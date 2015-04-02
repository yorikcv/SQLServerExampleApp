var express = require('express');
var router = express.Router();

var sql = require('mssql');

var configDb = require('../config').config;


/* GET genres page. */
router.get('/genres', function(req, res, next) {
    var connection = new sql.Connection(configDb, function(err) {
        if (err) return next(err);

        // Query 
        var QueryString = "SELECT * FROM Genre";
        var request = connection.request();
        request.query(QueryString, function(err, Genres) {
            if (err) return next(err);

            res.render('genres', {
                title: 'Genres',
                genres: Genres
            });

        });
    });
});

module.exports = router;
