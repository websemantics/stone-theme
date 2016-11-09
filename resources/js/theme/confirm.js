$(function () {

    // Initialize confirm buttons.
    $('[data-toggle="confirm"]').click(function (e) {

        e.preventDefault();

        bootbox.confirm($(this).data('message'), function (result) {
            if (result === true) {
                $(e.target).unbind('click')[0].click();
            }
        });
    });
});
