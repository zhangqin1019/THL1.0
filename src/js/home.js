requirejs.config({
	paths: {
		"jquery": "libs/jquery.min",
		"validate": "module/jquery.validate"
	}
});
requirejs(["jquery", "module/menu", "list-data", "module/pop_box","module/messages_cn"], function ($, menu, pop) {
	// 下面高度控制
	function down_height() {
		var win_h = $(window).height();
		var y_top = $(".y_top").height();
		var tab_iframe = win_h - y_top - 48;
		$(".y_lt,.y_rt,.y_main").css("height", win_h - y_top);
		// $(".y_rt").css("width", rt_w);
		$(".tab_iframe").css("height", tab_iframe);
	};
	down_height();

	// 长度的控制和左右按钮的显示
	function tab_w() {
		var tit_w = parseFloat($("#tab_title").css("width")),
			tab_ul = $(".tab_title_ul"),
			tab_bl = $(".tab_t_btnl"),
			tab_br = $(".tab_t_btnr"),
			tul_w = Math.ceil(parseFloat(tab_ul.css("width"))),
			tul_pl = Math.ceil(parseFloat(tab_ul.css("left")));
		tab_ul.css("width", $(".tab_title_ul li").length * 110);
		if (tit_w < tul_w) {
			if (tul_pl >= 0) {
				tab_bl.css("display", "none");
				tab_br.css("display", "block");
			} else if (tul_pl <= tit_w - tul_w) {
				tab_bl.css("display", "block");
				tab_br.css("display", "none");
			} else if (-110 > tul_pl > tit_w - tul_w - 110) {
				tab_bl.css("display", "block");
				tab_br.css("display", "block");
			}
		} else {
			tab_bl.css("display", "none");
			tab_br.css("display", "none");
		};
	};

	// 左右按钮触发的时间
	function btn_click(obj, l_w) {
		var tiemer = "";
		var time = 500;
		var fun = function bClick() {
			$(".tab_title_ul").animate({ "left": l_w }, 500);
			$(obj).unbind("click");
			tiemer = setTimeout(function () {
				$(obj).click(fun);
				tab_w();
			}, time);
		};
		$(obj).click(fun);
	};
	btn_click(".tab_t_btnl", '+=103px');
	btn_click(".tab_t_btnr", '-=103px');

	$(window).resize(function () {
		tab_w();
		down_height();
	});



	//普通iframe链接*lin*
	// var click2 = $('.add2');
	// function add2(link) {
	// 	var add_ifame = $('<iframe name="main" src="'+ link +'" class="tab_iframe" frameborder="0"></iframe>');
	// 	$('#show_pape .tab_iframe').hide();
	// 	$('#show_pape').append(add_ifame);
	// 	$('.tab_title_ul li a').removeClass('tab_title_on');
	// 	tab_w();
	// 	down_width();
	// };
	// click2.click(function() {		
	// 	var link = $(this).attr("data-href");
	// 	add2(link);
	// });



	// 添加或删除控件
	var url_arr = [];
	var click = $('.add-html');
	function add(Name, link) {
		var add_li = $('<li><a class="tab_title_on"><span class="tab_title_name">' + Name + '</span><span class="tab_title_close">×</span></a></li>'),
			add_ifame = $('<iframe name="' + Name + '" src="' + link + '" class="tab_iframe" frameborder="0"></iframe>');
		$('#show_pape .tab_iframe').hide();
		$('.tab_title_ul').append(add_li);
		$('#show_pape').append(add_ifame);
		tab_w();
		// iframe_change();
		down_height();
	};
	click.click(function () {
		var texts = $.trim($(this).find("span").text());
		var show1a = $('#tab_title ul li a span:first-child');
		var tab_title_ongeshu = $('.tab_title_ul li').length;
		for (var i = 0; i < show1a.length; i++) {
			if (show1a.eq(i).text() == texts) {
				$(".tab_title_ul li a").eq(i).click();
				return false;
			};
		};
		$(this).attr('target', texts);
		$('.tab_title_ul li a').removeClass('tab_title_on');
		var link = $(this).attr("data-href");
		add(texts, link);
		var url_a = new Array();
		url_a = [];
		url_a.push(texts);
		url_a.push(link);
		url_arr.push(url_a);
		SetCookie("on_url", JSON.stringify(url_arr));
	});
	$('#tab_title').on('click', 'ul li a span:last-child', function (event) {
		if ($(this).parent().hasClass('tab_title_on')) {
			var onlit = $('#tab_title ul li a').eq($('#tab_title ul li').length - 2),
				onlink = onlit.attr("data-link");
			onlit.addClass('tab_title_on');
			$('#show_pape .tab_iframe').eq($('#tab_title ul li').length - 2).attr("src", onlink);
		}
		var index = $('#tab_title ul li').index($(this).parent().parent());
		$(this).parent().parent().remove();
		$('#show_pape .tab_iframe').eq(index).remove();
		if ($('#show_pape .tab_iframe:visible').length == 0) {
			$('#show_pape .tab_iframe:last-child').show();
		}
		event.stopPropagation();
		tab_w();
		url_arr.splice(index, 1);
		SetCookie("on_url", JSON.stringify(url_arr));
	});
	$('#tab_title').on('click', 'ul li a', function () {
		if ($(this).hasClass('tab_title_on')) {
			return false;
		} else {
			$(this).addClass('tab_title_on').parent().siblings().children().removeClass('tab_title_on');
			var index = $('#tab_title ul li').index($(this).parent());
			$('#show_pape .tab_iframe').hide().eq(index).show();
			var onSrc = $('#show_pape .tab_iframe').eq(index);
			if (onSrc.attr("src") == "") {
				onSrc.attr("src", $(this).attr("data-link"));
			}
			tab_w();
		};
	});
	add("首页", "page/pape.html");
	// function GetUrlCookie(name){
	// 	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	// 	url_arr = $.parseJSON(arr[2]);
	// 	if (url_arr && url_arr.length > 0) {
	// 		$.each(url_arr,function(i,val){
	// 			$('.tab_title_ul li a').removeClass('tab_title_on');
	// 			add(val[0],'');
	// 			$('.tab_title_ul li a').eq(i).attr("data-link", val[1]);
	// 		});
	// 	}else{
	// 		add("首页", "page/pape.html");
	// 		$(".tab_iframe").attr("src","page/pape.html");
	// 		var new_a = new Array();
	// 		new_a = [];
	// 		new_a.push("首页");
	// 		new_a.push("page/pape.html");
	// 		url_arr.push(new_a);
	// 		SetCookie("on_url",JSON.stringify(url_arr));
	// 	}
	// 	var lastSrc = $('.tab_title_ul li a:last').attr("data-link");
	// 	$(".tab_iframe:last").attr("src",lastSrc);
	// };
	// GetUrlCookie("on_url");

	function SetCookie(name, value) {
		document.cookie = [name, '=', value].join('');
	};


	/*修改密码对话框*/
	$("#pw-modal").click(function () {
		$(this).createModal({
			background: "#000",   //设定弹窗之后的覆盖层的颜色
			width: "454px",   //设定弹窗的宽度
			height: "380px",   //设定弹窗的高度
			resizable: false,   //设定弹窗是否可以拖动改变大小
			move: false,    //规定弹窗是否可以拖动
			bgClose: false,   //规定点击背景是否可以关闭
			html: '<form method="post" action="#" id="altPass"><div class="password-content">' +
			'<h2>用户密码修改</h2>' +
			'<div class="fm-item fixed"><div class="fm-title">原密码:</div><div class="fm-text"><i class="iconfont npass"></i><input type="password" class="input-pub" id="oldpass" name="oldpass" /></div></div>' +
			'<div class="fm-item fixed"><div class="fm-title">新密码:</div><div class="fm-text" id="pass"><i class="iconfont npass"></i><input type="password" class="input-pub" id="newpass" name="newpass" /></div></div>' +
			'<div class="fm-item fm-pass fixed"><div class="fm-title">密码强度:</div><div class="fm-text" id="level"><div class="pass-bar"></div><div class="pass-baron"></div></div></div>' +
			'<div class="fm-item fixed"><div class="fm-title">确认新密码:</div><div class="fm-text"><i class="iconfont npass"></i><input type="password" class="input-pub" id="renewpass" name="renewpass" /></div></div>' +
			'<button type="button" class="btn-save">保存</button></div></form>',
			addFunction: function () {  //增加的方法
				//密码强弱检测
				function keyup() {
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
				}
				keyup();
				//密码明文密文切换*dmy
				$('.npass').click(function () {
					var $this = $(this),
						inp = $this.next(),
						cname = inp.attr('name'),
						val = inp.attr('value'),
						curClass = inp.attr('class'),
						text_html = '<input type="text" value="' + val + '" class="' + curClass + '">',
						pwd_html = '<input type="password" value="' + val + '" class="' + curClass + '">';

					function addInp(html) {
						$this.next().remove();
						$this.after(html);
						keyup();
					}
					if ($this.hasClass('npass')) {
						$this.removeClass('npass').addClass('fpass');
						addInp(text_html);
					} else {
						$this.removeClass('fpass').addClass('npass');
						addInp(pwd_html);
					}
				});
				//表单验证
				$("#altPass").validate({
					onfocusout: function(element) { $(element).valid(); },  
					rules:{
						oldpass:{
							required:true,
							pass:[6,50]
						},
						newpass:{
							required:true,
							pass:[6,50]
						},
						renewpass:{
							equalTo:"#newpass"
						}
					},
					messages:{
						oldpass:{
							required:"必填字段"
						},
						newpass:{
							required:"必填字段"
						},
						renewpass:{
							equalTo:"两次密码必须一致"
						}
					}
				});
				//密码验证
				$.validator.addMethod("pass",function(value,element,params){
	                var PASSWORD = /^\w{6,50}$/g;
	                return this.optional(element)||PASSWORD.test(value);
	            }, $.validator.format("包含字母、数字和下划线,长度为{0}-{1}"));

				// 点击保存时
				$('.btn-save', window.parent.document).click(function () {
					if($("#altPass").valid()){
						$(this).parent().parent().parent().parent().remove();//关闭弹窗
					}
				})
			}
		}, function () {  //回调函数

		});
	});
})
