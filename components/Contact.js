module.exports = {

  routes: function(app) {
    app.get('/contact', function(req, res) {
      res.render('Contact/show.html.twig', require_nc(__data + '/Contact/show'));
    });
  }

}
