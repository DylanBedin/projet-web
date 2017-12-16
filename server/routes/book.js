var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');
var User = require('../models/User.js');

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
    Book.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function (req, res, next) {
    Book.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE BOOK */
router.post('/', function (req, res, next) {
    Book.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* ADD BOOK TO COLLECTION */
router.post('/:id', function (req, res, next) {
    const bookID = req.params.id;
    console.log(bookID);
    User.findById(sessionStorage.getItem("userID"), function(err, post){
        if(err) return next(err);
        post.booksCollection.push(bookID);
        console.log(post);
    });
});

/* UPDATE BOOK */
router.put('/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        console.log(req.body);
    });
});

/* DELETE BOOK */
router.delete('/:id', function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
