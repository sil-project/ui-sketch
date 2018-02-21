$(document).ready(function() {
  $('.remove-note').click(function() {
    $(this).parents('.contact-note').remove();
  });

  $('.contact-phone, .contact-address').hover(function() {
    $(this).find('.make-default').toggle();
  });
});
