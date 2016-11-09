$(function () {

    var modal = $('.modal');
    var remote = $('.modal.remote');

    // Clear remote modals when closed.
    remote.on('hidden.bs.modal', function () {

        $(this).removeData('bs.modal');

        $(this).find('.modal-content').html('<div class="modal-loading"><div class="active loader"></div></div>');
    });

    // Show loader for remote modals.
    remote.on('show.bs.modal', function () {
        $(this).find('.modal-content').html('<div class="modal-loading"><div class="active loader"></div></div>');
    });

    // Handle ajax links in modals.
    modal.on('click', 'a.ajax, .pagination a', function (e) {

        e.preventDefault();

        var wrapper = $(this).closest('.modal-content');

        wrapper.append('<div class="modal-loading"><div class="active loader"></div></div>');

        $.get($(this).attr('href'), function (html) {
            wrapper.html(html);
        });
    });

    // Handle ajax forms in modals.
    modal.on('submit', 'form.ajax', function (e) {

        e.preventDefault();

        var wrapper = $(this).closest('.modal-content');

        wrapper.append('<div class="modal-loading"><div class="active loader"></div></div>');

        if ($(this).attr('method') == 'GET') {
            $.get($(this).attr('action'), $(this).serializeArray(), function (html) {
                wrapper.html(html);
            });
        } else {
            $.post($(this).attr('action'), $(this).serializeArray(), function (html) {
                wrapper.html(html);
            });
        }
    });
});
