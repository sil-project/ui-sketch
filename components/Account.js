module.exports = {

  routes: function(app) {
    app.get('/account', function(req, res) {
      res.render('_Component/Account/show.html.twig', require_data('Account/show'));
    });
  }

}
