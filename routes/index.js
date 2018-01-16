'use strict';
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res, next) {
  var allTheTweets = tweetBank.list();
  res.render('index', { title: 'Twitter.js', tweets: allTheTweets })
});

router.get('/users/:name', function(req, res, next) {
  var tweetsForName = tweetBank.find({name: req.params.name });
  res.render('index', { title: "Twitter.js", tweets: tweetsForName});
});

router.get('/stylesheets/style.css', function(req, res, next){
  res.sendFile('/stylesheets/style.css', { root: __dirname + '/../public/' });
});

module.exports = router;
