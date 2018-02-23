$(document).ready(function() {
  $('.contact-card').hover(function() {
    $(this).find('.make-default').toggle();
  });

  $('.pointing.stackable.menu .item').tab({history: true, historyType: 'hash'});
});
