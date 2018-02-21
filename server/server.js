var server = {
  declareGlobals: function(rootDir) {
    //global modules
    global.require_nc || (global.require_nc = require('require-nocache')(module));
    global.fs || (global.fs = require('fs'));
    global.path || (global.path = require('path'));
    global.extend || (global.extend = require('extend'));

    //global constants
    global.__base = rootDir;
    global.__data = path.join(__base, 'data');
    global.__components = path.join(__base, 'components');

    //global functions
    global.require_data = function(file, parentFile) {
      parentFile = parentFile || 'default';
      var parent = require_nc(path.join(__data, parentFile));
      return extend(true, parent, require_nc(path.join(__data, file)));
    };
  },

  init: function() {
    this.express = require('express');
    this.twig = require('twig');

    this.app = this.express();
  },

  disableCache: function() {
    this.twig.cache(false);
    this.app.use(function(req, res, next) {
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
      res.header('Expires', '-1');
      res.header('Pragma', 'no-cache');
      next();
    });
  },

  configure: function() {

    this.app.use('/js', this.express.static('js'));
    this.app.use('/img', this.express.static('img'));
    this.app.use('/css', this.express.static('css'));
    this.app.use('/dep', this.express.static('node_modules'));

    this.app.set('views', __base + '/views');
    this.app.set('view engine', 'twig');

    this.app.set('twig options', {
      strict_variables: false,
      namespaces: {
        'Template': __base + '/views'
      }
    });
  },

  start: function(port) {
    var app = this.app;
    //load components
    fs.readdir(__components, function(err, items) {
      for (var i = 0; i < items.length; i++) {
        require(path.join(__components, items[i])).routes(app);
      }
    });

    //run
    console.log('run on http://localhost:' + port);
    this.app.listen(port);
  }
};

module.exports = server;
