var express = require('express');
var require_nc = require('require-nocache')(module);
var twig = require('twig');

var app = express();
twig.cache(false);

app.use(function(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'twig');

// This section is optional and can be used to configure twig.
app.set('twig options', {
  strict_variables: false,
  namespaces: {
    'Template': __dirname + '/views'
  }
});

app.get('/', function(req, res) {
  res.render('Contact/show.html.twig', require_nc(__dirname + '/data/contact-index'));
});

app.get('/product', function(req, res) {
  res.render('Product/index.html.twig', require_nc(__dirname + '/data/product-index'));
});

app.post('/product', function(req, res) {
  res.render('Product/index.html.twig', require_nc(__dirname + '/data/product-index'));
});

app.get('/product', function(req, res) {
  res.render('Product/index.html.twig', require_nc(__dirname + '/data/product-index'));
});

app.post('/product', function(req, res) {
  res.render('Product/index.html.twig', require_nc(__dirname + '/data/product-index'));
});

app.get('/product/create', function(req, res) {
  res.render('Product/create.html.twig', require_nc(__dirname + '/data/product-index'));
});

app.listen(9999);
