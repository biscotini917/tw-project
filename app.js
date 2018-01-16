const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use(morgan('dev'));

//typical way to use express static
app.use(express.static(__dirname + './public'));

// manually-written static file middlware
// app.use(function(req, res, next) {
//   let mimeType = mime.lookup(req.path);
//   fs.readFile('./public' + req.path, function(err, fileBuffer) {
//     if (err) return next();
//     res.header('Content-Type', mimeType);
//     res.send(fileBuffer);
//   });
// });
app.use('/', routes); // app.use('/', routes);

app.listen(3000, () => console.log('Example listening on port 3000!'))
