module.exports = {

  routes: function(app) {
    app.get('/invoice', function(req, res) {
      res.render('Invoice/show.html.twig', require_data('Invoice/show'));
    });

    app.get('/invoice/create', function(req, res) {
      res.render('Invoice/create.html.twig', require_data('Invoice/create'));
    });
  }

}
