module.exports = {

  routes: function(app) {
    app.get('/cgarm', function(req, res) {
      res.render('Cgarm/index.html.twig', require_data('Cgarm/index', 'default'));
    });

  }

}
