$(function () {

    // Detect ajax errors.
    $(document).ajaxError(function (event, xhr, settings, exception) {

        // We've been kicked out.
        if (xhr.status == '401') {

            // Close all modals.
            $('.modal').modal('hide');

            bootbox.alert('Unauthorized (401)');

            // If we're in the admin redirect to admin login.
            if (window.location.pathname.startsWith('/admin')) {
                window.location = APPLICATION_URL + '/admin/login';
            } else {
                window.location = APPLICATION_URL + '/login';
            }
        }

        // We're not authorized.
        if (xhr.status == '403') {

            // Close all modals.
            $('.modal').modal('hide');

            bootbox.alert('Not Allowed (403)');
        }

        // We're lost.
        if (xhr.status == '404') {

            // Close all modals.
            $('.modal').modal('hide');

            bootbox.alert('Page Not Found (404)');
        }

        // Something terrible happened.
        if (xhr.status == '500') {

            // Close all modals.
            $('.modal').modal('hide');

            bootbox.alert('Error (500) - Please check your application error logs.');
        }
    });
});
