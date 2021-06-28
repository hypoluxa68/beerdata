const express = require('express');
const pug = require('pug');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'Home'})
});

app.listen(3000, () => {
  console.log('server started');
});