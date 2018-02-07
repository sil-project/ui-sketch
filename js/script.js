li = {

  templates: {

    htmlInclude: function() {
      var tpls = [];
      $("*[html-include]").each(function() {
        var el = $(this);
        tpls.push($.get(el.attr("html-include"), function(data) {
          el.replaceWith(data);
        }, 'html'));
      });
      return $.when(tpls);
    }
  },
  semanticUi: {

    registry: {},

    register: function(name, callback) {
      this.registry[name] = callback;
    },

    load: function() {
      for (var key in this.registry) {
        this.registry[key]();
        console.log('load semantic ui '+key);
      }
    }
  }
};

$(document).ready(function() {
  li.templates.htmlInclude().done(function(){
    setTimeout(function(){li.semanticUi.load();}, 1000);
  });
});
