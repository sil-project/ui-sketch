module.exports = {

  routes: function(app) {
    app.get('/contact', function(req, res) {
      res.render('_Component/Contact/show.html.twig', require_data('Contact/show'));
    });
  }

}
