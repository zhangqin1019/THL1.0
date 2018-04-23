// 密码强弱检测
$(function () {
    function changeClass() {
        $('#level').removeClass('pw-weak').removeClass('pw-medium').removeClass('pw-strong');
    }
    $('#pass input').keyup(function () {
        var strongRegex = new RegExp("^(?=.{12,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"),//大小写字母加数字加特殊字符 12位
            mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"),
            enoughRegex = new RegExp("(?=.{8,}).*", "g"),
            textValue = $(this).attr('value');
        if (false == enoughRegex.test(textValue)) {
            changeClass();
            $('#level').addClass(' pw-defule');
        } else if (strongRegex.test(textValue)) {
            changeClass();
            $('#level').addClass(' pw-strong');
        } else if (mediumRegex.test(textValue)) {
            changeClass();
            $('#level').addClass(' pw-medium');
        } else {
            changeClass();
            $('#level').addClass('pw-weak');
        }
    });
});
// 表单验证
$(function () {
    var $input = $('.f-text input'),
        $btn = $('.btn-wrap a').eq(0),
        flag = false;
    $btn.bind('click', function (e) {
        $input.each(function (e, i) {
            if ($(this).attr('value').trim() == '') {
                $(this).css('borderColor', 'red');
                flag = true;
            }
        })
        if (flag) {
            $input.focus(function(){
                $input.css('borderColor', '#cacaca');
                $(this).css('borderColor', 'red');
            })
        }
    });
})