module.exports = {

  routes: function(app) {

    app.route('/dashboard')
      .get(function(req, res) {
        res.render('Dashboard/index.html.twig', require_data('Dashboard/index'));
      });
  }

}
