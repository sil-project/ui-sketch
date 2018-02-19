$(document).ready(function() {

  $('.ui.accordion').accordion({
    exclusive: false
  });
  $('.tabular.menu .item').tab({
    history: true,
    historyType: 'hash'
  });
  $('.ui.dropdown').dropdown();

  $('#sidebar').addClass('visible');
  $('#sidebar').sidebar('attach events', '#sidebar-toggle', 'toggle');
  $('#sidebar').sidebar('setting', {
    dimPage: false,
    closable: false
  });

  $('[data-requires-confirm]').modalConfirmation();
});
