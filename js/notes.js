$(document).ready(function() {
  $('.remove-note').click(function() {
    $(this).parents('.contact-note').remove();
  });
});
