requirejs.config({
	paths: {
		"jquery": "libs/jquery.min"
	}
});

requirejs(["jquery"], function($){
        var $btn = $('.btn-wrap input').eq(0);
        // 空格提交表单
        $(document).bind('keyup', function (e) {
            if (e.keyCode == 13) {
                $btn.click();
            }
        })
        //点击切换图标
        $('.username input').focus(function(){
            $('.username span').css('backgroundPositionX','-20px');
        }).blur(function(){
            $('.username span').css('backgroundPositionX','0');
        })
        $('.userpwd input').focus(function(){
            $('.userpwd span').css('backgroundPositionX','-20px');
        }).blur(function(){
            $('.userpwd span').css('backgroundPositionX','0');
        })
})
