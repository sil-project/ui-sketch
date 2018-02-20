$(document).ready(function() {

  $('.ui.accordion:not(.exclusive)').accordion({
    exclusive: false
  });
  $('.ui.accordion.exclusive').accordion({
    exclusive: true
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

  $('[data-content]')
    .popup({
      inline: true
    });
});
