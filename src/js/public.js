// ------------------弹出层-------------------------------------------------------------------------------
//弹出层打开关闭事件
$(function(){
  $(".list_con").live("click",function(){
    var win_width = $(window).width();
    var win_height = $(window).height();
    var doctment_height = $(document).height();
    var alert_width = $(".win_alert").width();
    var alert_height = $(".win_alert").height();
    var win_top = (win_height-alert_height)/2;
    var win_left = (win_width-alert_width)/2;
    $(".win_bg").show();
    $(".win_alert").show();
    $(".win_bg").css({"width":win_width,"height":doctment_height});
    $(".win_alert").css({"top":win_top,"left":win_left});
    $(".alert_con").css({"height":alert_height-84,"overflow-y":"scroll"});
    var click_name = $(this).prev("strong").html();
    $(".win_alert h3 b").html(click_name);
    var cheakbox_val = $(this).closest("a").find(".l input").val();
    $(".win_alert .alert_con .edit_f2 #cheakbox_val").val(cheakbox_val);
  })
  $(".win_close,.win_bg").live("click",function(){
    win_close();
  })
})
//关闭弹出层函数
function win_close(){
  $(".win_bg,.win_alert").hide();
}
//弹出层窗口大小
function fun_size(win_w,win_h){
  var win_width = $(window).width();
  var win_height = $(window).height();
  if (win_w>win_width) {
    win_w=win_width-20;
  }else if (win_h>win_height) {
    win_h=win_height-20;
  };
  $(".win_alert").css({"width":win_w,"height":win_h});
  var win_top = (win_height-win_h)/2;
  var win_left = (win_width-win_w)/2;
  $(".win_alert").css({"top":win_top,"left":win_left});

}
//弹出层 编辑 删除功能
$(function(){
    var html = "<tr class='edit_name'><td class='edit_f1'><input type='text' placeholder='子层模块名称'/></td><td class='edit_f2'><input  type='text' placeholder='新模块路径'/></td><td><a class='edit_del' href='JavaScript:;'><span>删除</span></a></td></tr>";

    $(".edit_del").live("click",function(){
      $(this).closest(".edit_name").remove();
    })
    $(".edit_add").live("click",function(){
      $(this).closest("tbody").append(html);
    })
    $(".parent_li a").live("mouseenter",function(){
      $(this).find("b").show();
    })
    $(".parent_li a").live("mouseleave",function(){
      $(this).find("b").hide();
    })
  })

// ------------------页面延迟加载-------------------------------------------------------------------------------

//加载页面前执行(页面正在加载)
 function loading_start(){
   var h = $(window).height();
   $(".overlay").css({"height": h });
   $(".overlay").css({'display':'block','opacity':'0.7','filter':'alpha(opacity=0.7)'});
   $(".showbox").stop(true).animate({'top':'44%','opacity':'1'},200);
}
loading_start();
//加载页面结束执行
 function loading_end(){
  setTimeout(function(){
      $(".showbox").stop(true).animate({'top':'50%','opacity':'0'},400);
      $(".overlay").css({'display':'none','opacity':'0'});
  },200);
}
//页面加载完成时执行
$(window).load(function(){
    loading_end();
});
//查询表格异步加载数据时执行  异步 需要就用`不需要就删除
// $(function(){
//  $(".btn-query").on("click",function(){
//    loading_start();
//    $.ajax({
//        type:"POST",
//        url:"", 
//        data: "",
//        success:function(msg){
//            loading_end();
//        }
//    });
//  });
// })