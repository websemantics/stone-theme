$(function () {

    // Initialize prompt buttons.
    $('[data-toggle="prompt"]').click(function (e) {

        e.preventDefault();

        bootbox.prompt($(this).data('message'), function (result) {

            var match = $(e.target).data('match') || 'yes';

            if (result === match) {
                $(e.target).unbind('click')[0].click();
            } else if (typeof result == 'string') {
                $('.bootbox.modal')
                    .find('.modal-dialog')
                    .addClass('animated shake');

                setTimeout(function () {
                    $('.bootbox.modal')
                        .find('.modal-dialog')
                        .removeClass('shake')
                        .removeClass('animated')
                }, 1000);

                return false;
            }
        });
    });
});
