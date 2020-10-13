console.log('jq работает');
$(window).on('load', function () {


    /* Ajax регистрация */
    var form = $('#register_form');
    form.on('submit', function () {

        var data = form.serialize();

        console.log(data);

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: data,
            dataType: 'json',
            success: function (data) {
                if (data['action'] === 'reload') {
                    location.reload();
                }
                notification(data['message'], data['type']);

            },
            failure: function (errMsg) {
                $.notify('Что то пошло не так,попробуйте еще раз!',
                    {
                        className: "error",
                        globalPosition: 'right middle'

                    });

                notification(data['message'], data['type']);

            }
        });
    });







});