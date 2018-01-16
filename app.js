const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require( 'nunjucks');

app.listen(3000, () => console.log('Example listening on port 3000!'))

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true});

// var locals = {
//   title: 'An Example',
//   people: [
//       { name: 'Gandalf'},
//       { name: 'Frodo' },
//       { name: 'Hermione'}
//   ]
// };

// nunjucks.render('index.html', locals, function (err, output) {
//   console.log(output);
// });

app.get('/', function (req, res, next) {
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
  console.log(res.statusCode);
});

app.post('/', function (req, res, next) {
  res.send('modernism');
  next()
});

