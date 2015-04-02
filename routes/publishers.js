var express = require('express');
var router = express.Router();

var sql = require('mssql');

var configDb = require('../config').config;


/* GET publishers page. */
router.get('/publishers', function(req, res, next) {
    var connection = new sql.Connection(configDb, function(err) {
        if (err) return next(err);

        // Query
        var QueryString = "SELECT * FROM Publisher";
        var request = connection.request();
        request.query(QueryString, function(err, Publishers) {
            if (err) return next(err);

            res.render('publishers', {
                title: 'Publishers',
                publishers: Publishers
            });

        });
    });
});

module.exports = router;
