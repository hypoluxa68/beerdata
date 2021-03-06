const express = require('express');
const pug = require('pug');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'Beer Data'})
});

app.get('/beers', (req, res) => {
	res.render('beers', {title: 'Beer Data | Beers'})
});

app.get('/breweries', (req, res) => {
	res.render('breweries', {title: 'Beer Data | Breweries'})
});

app.listen(3000, () => {
  console.log('server started');
});