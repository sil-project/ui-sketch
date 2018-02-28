module.exports = {

  routes: function(app) {

    app.route('/order')
      .get(function(req, res) {
        res.render('_Component/Order/index.html.twig', require_data('Order/index'));
      })
      .post(function(req, res) {
        res.render('_Component/Order/index.html.twig', require_data('Order/index'));
      });


    app.get('/order/create', function(req, res) {
      res.render('_Component/Order/create.html.twig', require_data('Order/create'));
    });

    app.route('/order/list')
      .get(function(req, res) {
        res.render('_Component/Order/list.html.twig', require_data('Order/list'));
      })
  }

}
