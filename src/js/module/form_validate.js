 // 表单验证插件
 define(["jquery"], function($) {
     function Validate(el, opts) {
         this.opts = $.extend({}, Validate.DEFAULTS, opts);
         this.setForm(this.opts.mode);
     }
     Validate.prototype.setForm = function(arr){
         $.each(arr,function(i,obj){
            var className = obj.class,//获得类名
                errMsg = obj.errMsg,//获得错误信息
                errHtml,
                $item = $('.'+className);
            function trimValue($_ths){
                return $.trim($_ths.attr('value'));
            }
            function appendTip($_ths,msg){
                if(!$_ths.next().hasClass('f-tip')){
                    errHtml = '<div class="f-tip">'+msg+'</div>'
                    $_ths.after(errHtml);
                }
            }
            $item.blur(function(){ 
                var $_ths = $(this);
                 //必填
                if(obj.require){
                   if(trimValue($_ths)==''){
                         appendTip($_ths,"不能为空");
                   }
                   else{
                       $_ths.next('.f-tip').remove();
                        //最大长度
                        if(obj.maxlen){
                            if($_ths.attr('value').length>obj.maxlen){
                                appendTip($_ths,"超出字数限制,最大长度为"+obj.maxlen);
                            }
                            else{
                                $_ths.next('.f-tip').remove();
                            }
                        }
                    }
                }

            })
        })
    }
    // 设置默认值
    // $('.u-l-box').Validate({
    //     mode:[
    //         {class:"dmy-pwd",
    //             require:true,
    //             errMsg:"大家好"
    //         },
    //         {class:"dmy-agpwd"}
    //     ]
    //     });
    Validate.DEFAULTS = {
        mode:""
    }
    // 定义方法
    $.fn.extend({
        Validate: function(opts) {
            return this.each(function() {
                new Validate(this, opts);
            });
        }
    });
})
