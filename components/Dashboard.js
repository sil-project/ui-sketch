module.exports = {

  routes: function(app) {

    app.route('/')
      .get(function(req, res) {
        res.render('Dashboard/index.html.twig', require_data('Dashboard/index'));
      });
  }

}
