module.exports = {

  routes: function(app) {
    app.get('/product', function(req, res) {
      res.render('Product/index.html.twig', require_nc(__data + '/Product/product-index'));
    });

    app.post('/product', function(req, res) {
      res.render('Product/index.html.twig', require_nc(__data + '/Product/product-index'));
    });
  }

}
