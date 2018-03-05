module.exports = {

  routes: function(app) {

    app.route('/stock/warehouse')
      .get(function(req, res) {
        res.render('_Component/Stock/Warehouse/show.html.twig', require_data('Stock/warehouse'));
      });

    app.route('/stock/location')
      .get(function(req, res) {
        res.render('_Component/Stock/Location/show.html.twig', require_data('Stock/location'));
      });

    app.route('/stock/operation')
      .get(function(req, res) {
        res.render('_Component/Stock/Operation/show.html.twig', require_data('Stock/operation'));
      })

  }

}
