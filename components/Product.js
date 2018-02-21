module.exports = {

  routes: function(app) {

    app.route('/product')
      .get(function(req, res) {
        res.render('Product/index.html.twig', require_data('Product/index'));
      })
      .post(function(req, res) {
        res.render('Product/index.html.twig', require_data('Product/index'));
      });


    app.get('/product/create', function(req, res) {
      res.render('Product/create.html.twig', require_data('Product/index'));
    });
  }

}