module.exports = {

  routes: function(app) {
    app.get('/contact', function(req, res) {
      res.render('Contact/index.html.twig', require_nc(__data + '/Contact/index'));
    });
  }

}
