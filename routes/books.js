var express = require('express');
var router = express.Router();

var sql = require('mssql');

var configDb = require('../config').config;


/* GET books page. */
router.get('/books', function(req, res, next) {
    var connection = new sql.Connection(configDb, function(err) {
        if (err) return next(err);

        // Query 
        var QueryString = "SELECT Book.title, Author.firstName, Author.lastName, Publisher.name as publisher, Genre.title as genre, Book.yearProduction as year, Book.countPage as pages FROM Book INNER JOIN Author ON Book.id_a=Author.id INNER JOIN Publisher ON Book.id_p=Publisher.id INNER JOIN Genre ON Book.id_g=Genre.id";
        var request = connection.request(); // or: var request = connection.request(); 
        request.query(QueryString, function(err, books) {
            if (err) return next(err);

            res.render('books', {
                title: 'Books',
                books: books
            });

        });
    });
});

module.exports = router;
