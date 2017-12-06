var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Album = require('../models/Album.js');

/* GET ALL ALBUMS */
router.get('/', function (req, res, next) {
    Album.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

/* GET SINGLE ALBUM BY ID */
router.get('/:id', function (req, res, next) {
    Album.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE ALBUM */
router.post('/', function (req, res, next) {
    Album.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE ALBUM */
router.put('/:id', function (req, res, next) {
    Album.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE ALBUM */
router.delete('/:id', function (req, res, next) {
    Album.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
