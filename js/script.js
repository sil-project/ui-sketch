$(document).ready(function() {

    $('.ui.accordion:not(.exclusive)').accordion({exclusive: false});
    $('.ui.accordion.exclusive').accordion({exclusive: true});
    $('.tabular.menu .item').tab({history: true, historyType: 'hash'});
    $('.ui.dropdown').dropdown();
    $('.ui.checkbox').checkbox();

    $('#sidebar').addClass('visible');
    $('#sidebar').sidebar('attach events', '#sidebar-toggle', 'toggle');
    $('#sidebar').sidebar('setting', {
        dimPage: false,
        closable: false
    });

    $('[data-requires-confirm]').modalConfirmation();

    $('[data-content]').popup({inline: true});

    $('.ui.with.form').toggleForm();

    $('.ui.with.form form .submit').on('click', function() {
        $(this).closest('form').removeClass('transition').addClass('loading');
    });

    $('[data-modal]:not(.ui.modal)').on('click', function() {
        var btn = $(this);
        var modal = $('.ui.modal[data-modal="' + btn.attr('data-modal') + '"]');

        modal.modal('setting', 'transition', 'pulse').modal('show');
    });
});

jQuery.fn.toggleForm = function() {
    return this.each(function() {

        var o = $(this);
        var toggler = $('<a class="ui right floated toggler"><i class="edit outline icon center aligned"></i></a>');
        var form = o.find('.ui.form');

        o.find('.ui.header').append(toggler);

        toggler.on('click', function() {

            var showContent = o.find('> *:not(form,.toggler,.ui.header,.ui.divider)');

            if (form.is(':visible')) {
                form.transition({
                    'animation': 'scale',
                    onComplete: function() {
                        showContent.transition('scale');
                        toggler.find('.icon').removeClass('undo alternate').addClass('edit outline');
                    }
                });
            } else {
                showContent.transition({
                    'animation': 'scale',
                    onComplete: function() {
                        form.transition('scale');
                        toggler.find('.icon').removeClass('edit outline').addClass('undo alternate');
                    }
                });
            }

        });
    });
};
