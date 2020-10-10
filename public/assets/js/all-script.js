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



    // отправка формы обратной связи
    $(function () {
        $('#feedback_form').submit(function (e) {
            var form = $(this);
            $.ajax({
                type: form.attr('method'),
                url: form.attr('action'),
                data: form.serialize()
            }).done(function (result) {
                console.log(result);
                $("#successful_sending").html(result);
            }).fail(function () {
                console.log('fail');
            });
            e.preventDefault();
        });
    });

    // открытие мобильного меню
    $('.icon-menu').on("click", function () {
        $('.menu').animate({
            left: '0px'
        }, 200);

        $('body').animate({left: '285px'}, 200);
    });

    // закрытие мобильногоменю при клике крестик
    $('.icon-close').on("click", function () {
        $('.menu').animate({
            left: '-285px'
        }, 200);

        $('body').animate({left: '0px'}, 200);
    });

    // модалка ошибки формы
    $('.input-submit').on("click", function () {
        if ($(".successful_sending").html() === '') {
            setTimeout(function () {
                $("#successful_sending").empty();
                $('.input').val('');
            }, 4000);
        }
    });

    // закрытие мобильногоменю при клике мимо
    $(document).mouseup(function (e) {
        var block = $(".icon-close");
        if (!block.is(e.target)
            && block.has(e.target).length === 0) {
            $('.menu').animate({
                left: '-285px'
            }, 200);
        }
    });


});