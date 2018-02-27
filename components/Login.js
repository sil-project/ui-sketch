module.exports = {

  routes: function(app) {

    app.route('/')
      .get(function(req, res) {
        res.render('Login/index.html.twig', require_data('Login/index'));
      });

    app.route('/login')
      .post(function(req, res) {
        res.redirect('/dashboard');
      });
  }

}
