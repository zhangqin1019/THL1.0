requirejs.config({
	paths: {
		"jquery": "libs/jquery.min",
		"validate": "module/jquery.validate"
	}
});
requirejs(["jquery", "module/pop_box","module/messages_cn"], function ($,popbox) {
	//角色弹窗
	$(".role").click(function () {
		var $_that = $(this);
		$(this).createModal({
			background: "#000",   //设定弹窗之后的覆盖层的颜色
			width: "265px",   //设定弹窗的宽度
			height: "202px",   //设定弹窗的高度
			resizable: false,   //设定弹窗是否可以拖动改变大小
			move: false,    //规定弹窗是否可以拖动
			bgClose: false,   //规定点击背景是否可以关闭
			html: '<div class="pop_box"><h2>修改:角色</h2><p><span>角色</span>' +
			'<select class="input-pub"><option>招标111</option></select></p>' +
			'<input type="button" value="取消" class="modal-close"><input type="button" value="保存" class="save"></div>',
			addFunction: function () {  //增加的方法
				// 点击保存按钮
				$('.save', window.parent.document).click(function () {
					$_that.parents('tr').css("backgroundColor", "#f3f9ff");//保存成功=>tr背景颜色改变
					$(this).parent().parent().parent().remove();//关闭弹窗
				})
			}
		});
	});

	// 密码重置弹窗
	$(".pwd-reset").click(function () {
		$(this).createModal({
			background: "#000",   //设定弹窗之后的覆盖层的颜色
			width: "265px",   //设定弹窗的宽度
			height: "250px",   //设定弹窗的高度
			resizable: false,   //设定弹窗是否可以拖动改变大小
			move: false,    //规定弹窗是否可以拖动
			bgClose: false,   //规定点击背景是否可以关闭
			html: '<div class="pop_box"><h2>修改:密码</h2><div class="pwd">' +
			'<p>请设置新密码:</p><input type="password" class="input-pub"></div>' +
			'<div class="pwd"><p>再次输入新密码:</p><input type="password" class="input-pub"></div>' +
			' <input type="button" value="保存" class="pwd_save"></div>',
			addFunction: function () {  //增加的方法
				// 点击保存时
				$('.pwd_save', window.parent.document).click(function () {
					$(this).parent().parent().parent().remove();//关闭弹窗
				})
			}
		});
	});
	// 确认删除弹窗
	$(".del").click(function () {
		var $_that = $(this);
		$(this).createModal({
			background: "#000",   //设定弹窗之后的覆盖层的颜色
			width: "265px",   //设定弹窗的宽度
			height: "202px",   //设定弹窗的高度
			resizable: false,   //设定弹窗是否可以拖动改变大小
			move: false,    //规定弹窗是否可以拖动
			bgClose: false,   //规定点击背景是否可以关闭
			html: '<div class="pop_box"><h2>确认删除</h2><p>是否删除该账号信息？</p>' +
			'<input type="button" value="取消" class="modal-close"><input type="button" value="删除" class="confirm_del save"></div>',
			addFunction: function () {  //增加的方法
				// 点击删除按钮
				$('.confirm_del', window.parent.document).click(function () {
					$(this).parent().parent().parent().remove();//关闭弹窗
					$_that.parents('tr').remove();//删除该行
				})
			}
		});
	});
	//新增账号弹窗
	$(".search-btn").click(function(){
		$(this).createModal({
			background: "#000",   //设定弹窗之后的覆盖层的颜色
			width: "350px",   //设定弹窗的宽度
			height: "345px",   //设定弹窗的高度
			resizable: false,   //设定弹窗是否可以拖动改变大小
			move: false,    //规定弹窗是否可以拖动
			bgClose: false,   //规定点击背景是否可以关闭
			html: '<form method="post" action="#" id="addAccount"><div class="add-number"><h2>新增账号</h2>'+
				  '<div class="add-content"><div class="fm-item"><label>用户名:</label><input type="text" class="input-pub" id="username" name="username"/></div>'+
				  '<div class="fm-item"><label>密码:</label><input type="password" class="input-pub" id="password" name="password"/></div>'+
				  '<div class="fm-item"><label>确认密码:</label><input type="password" class="input-pub" id="repassword" name="repassword"/></div>'+
				  '<div class="fm-item"><label>描述:</label><textarea class="input-pub" id="describe" name="describe"></textarea></div></div>'+
				  '<input type="button" value="保存" class="save"/></div></form>',
			addFunction:function(){ //增加的方法
				//表单验证
				$("#addAccount",window.parent.document).validate({
					onfocusout: function(element) { $(element).valid(); },
					rules:{
						username:{
							required:true,
							userName:[3,50]
						},
						password:{
							required:true,
							pass:[6,50]
						},
						repassword:{
							// equalTo:"#password",
							required:true,
							newequal:true
						},
						describe:{
							required:true,
							minlength:10
						}
					},
					messages:{
						username:{
							required:"必填字段"
						},
						password:{
							required:"必填字段"
						},
						describe:{
							required:"必填字段",
							minlength:$.validator.format("请输入长度最少是{0}的字符串")
						}
					}
				})
				//用户名验证
				$.validator.addMethod("userName",function(value,element,params){
	                var NAME=/^([a-zA-Z0-9]|[\u4e00-\u9fa5]){3,50}$/g; 
	                return this.optional(element)||NAME.test(value);
	            }, $.validator.format("包含字母、数字或中文，长度为{0}-{1}"));
				//判断密码一致
				$.validator.addMethod("newequal",function(value,element,params){
                    var pass = $('#addAccount',window.parent.document).find("#password").val();
					 return this.optional(element)||(value == pass);
	            }, $.validator.format("两次输入的密码必须一致"));
				//密码验证
				$.validator.addMethod("pass",function(value,element,params){
	                var PASSWORD = /^\w{6,50}$/g;
	                return this.optional(element)||PASSWORD.test(value);
	            }, $.validator.format("包含字母、数字和下划线,长度为{0}-{1}"));
				// 点击保存时
				$('.save', window.parent.document).click(function () {
					if($("#addAccount", window.parent.document).valid()){
						$(this).parent().parent().parent().parent().remove();//关闭弹窗
					}
				});
			}
		});

		
	});
	//点击分页按钮背景变蓝色
	$(".num-page .num-click").click(function(){
		$(this).addClass("page-bg");
		$(this).siblings().removeClass("page-bg");
	});
});