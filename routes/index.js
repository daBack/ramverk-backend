
// var express = require('express');
// var router = express.Router();
var apiFunctions = require('../src/apiFunctions');

exports.index = (req, res) => {
    res.render('index', {title: 'Oscar Bäck'});
};

exports.stats = (req, res) => {
    apiFunctions.getStats(res, req);
};

exports.standard = (req, res) => {
    res.send("Try use /api/stats");
};

exports.matchHistory = (req, res) => {
    apiFunctions.getMatchHistory(req, res);
};

exports.test = (req, res) => {
    apiFunctions.getAvatar(res, req);
};
