//ie6 ie7处理
$(document).ready(function(){  
    if(navigator.userAgent.indexOf("MSIE")>0){   
      if(navigator.userAgent.indexOf("MSIE 6.0")>0){   
        alert("你的浏览器版本太旧,请升级!");
        window.location.href="http://xiazai.zol.com.cn/browsers_soft_index/browsers_page_1.html";    
      }   
      // if(navigator.userAgent.indexOf("MSIE 7.0")>0){  
      //   alert("你的浏览器版本太旧,请升级!");
      //   window.location.href="http://xiazai.zol.com.cn/browsers_soft_index/browsers_page_1.html";   
      // }   
    } 

//左边导航
    $(".y_lt_list a").on("click",function(){
        $(".y_lt_list a").removeClass("y_lt_list_cur");
        $(this).addClass("y_lt_list_cur");
    }); 

    $(".list-menu li").on("click",function(){
        var menu_h = $(".list-menu .dropdown").height();
        var ylt_h = $(".y_lt").height();
        if (menu_h<ylt_h) {
          $(".y_lt").css("overflow-y","auto");
        }
    }); 

//登录后鼠标移上去出现退出框
    var stc;
    $(".y_login").live("mousemove mouseenter",function(){ 
        $(".y_login_on").show();
    }); 
    $(".y_login_on").live("mousemove",function(){     
        if(stc){
            clearTimeout(stc);//清除定时器
        }
        $(".y_login_on").show();
    }); 
    $(".y_login").live("mouseleave",function(){ 
        stc = setTimeout(function (){           
            $(".y_login_on").hide();
            clearTimeout(stc);
        },1000);    
    });
}); 


//d当前时间
window.onload=function(){
  //定时器每秒调用一次fnDate()
  setInterval(function(){
  fnDate();
  },1000);
}
//js 获取当前时间
function fnDate(){
  var ttiv=document.getElementById("time_now");
  var date=new Date();
  var year=date.getFullYear();
  var month=date.getMonth();
  var data=date.getDate();
  var hours=date.getHours();
  var minute=date.getMinutes();
  var second=date.getSeconds();
  //var time=year+"-"+fnW((month+1))+"-"+fnW(data)+" "+fnW(hours)+" : "+fnW(minute);
  var a_num = new Array("日", "一", "二", "三", "四", "五", "六"); 
  var week = new Date().getDay(); 
  var str7 = a_num[week]; 
  $(ttiv).html('，今天是'+year+'年'+fnW((month+1))+'月'+fnW(data)+'日'+'，星期'+str7); 
}
//当某个字段不是两位数时补0
function fnW(str){
  var num;
  str>=10?num=str:num="0"+str;
  return num;
} 
