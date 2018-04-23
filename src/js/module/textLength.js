 // 检测剩余字数插件
 define(["jquery"], function($) {
     function checkTextnum(el, opts) {
         this.opts = $.extend({}, checkTextnum.DEFAULTS, opts);
         var ths = this;
         ths.statInputNum(el, this.opts.numClass, this.opts.maxNum); //输入框，数字类名，允许输入的最大数字
     }
     // 设置默认值
     checkTextnum.DEFAULTS = {
         maxNum: 250, //允许的最大值
         numClass: 'f_maxnum' //数字表现区域的类名
     };
     // 定义检测方法
     checkTextnum.prototype.statInputNum = function(el, numClass, maxNum) {
         var $numClass = $('.' + numClass), //数字显示区
             $input = $(el); //输入框
         $input.attr('maxlength', maxNum);
         $input.on('input propertychange', function() {
             $numClass.text(maxNum - $(this).val().length);
             if ($numClass.text() < 0) {
                 $numClass.text(0);
             }
         });
     }

     $.fn.extend({
         checkTextnum: function(opts) {
             return this.each(function() {
                 new checkTextnum(this, opts);
             });
         }
     });
 })
