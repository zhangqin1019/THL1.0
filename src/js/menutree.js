$(function () {

    var json =
        [{
            "name": "<span class='l'><image src='../images/list-sel.png'/><input type='checkbox' class='input-check' id='check1'/><label for='check1'></label></span><strong>系统权限</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
            "code":"XTQX",
            "icon": "icon-th",
            "child": [
                {
                    "name": "<span class='l'><image src='../images/list-sel.png'/><input type='checkbox' class='input-check' id='check11'/><label for='check11'></label></span><strong>系统管理</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                    "icon": "icon-minus-sign",
                    "code":"XTGL",
                    "parentCode": "XTQX",
                    "child": [
                        {
                            "name": "<span class='l'><image src='../images/list-sel.png'/><input type='checkbox' class='input-check' id='check21'/><label for='check21'></label></span><strong>账号管理</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                            "code":"ZHGL",
                            "icon": "",
                            "parentCode": "XTGL",
                            "child": [
                                {
                                    "name": "<span class='l'><input type='checkbox' class='input-check' id='check31'/><label for='check31'></label></span><strong>修改密码</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                                    "code":"XGMM",
                                    "icon": "",
                                    "parentCode": "ZHGL",
                                    "child":[]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "<span class='l'><image src='../images/list-sel.png'/><input type='checkbox' class='input-check' id='check12'/><label for='check12'></label></span><strong>会员管理</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                    "icon": "",
                    "code":"HYGL",
                    "parentCode": "XTQX",
                    "child": [
                        {
                            "name": "<span class='l'><image src='../images/list-sel.png'/><input type='checkbox' class='input-check' id='check22'/><label for='check22'></label></span><strong>角色管理</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                            "code":"JSGL",
                            "icon": "",
                            "parentCode": "HYGL",
                            "child": [
                                {
                                    "name": "<span class='l'><input type='checkbox' class='input-check' id='check32'/><label for='check32'></label></span><strong>新增角色</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                                    "code":"XZJS",
                                    "icon": "",
                                    "parentCode": "JSGL",
                                    "child": []
                                },
                                {
                                    "name": "<span class='l'><input type='checkbox' class='input-check' id='check33'/><label for='check33'></label></span><strong>编辑角色</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                                    "code":"BJJS",
                                    "icon": "",
                                    "parentCode": "JSGL",
                                    "child": []
                                },
                                {
                                    "name": "<span class='l'><input type='checkbox' class='input-check' id='check34'/><label for='check34'></label></span><strong>权限</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                                    "code":"QX",
                                    "icon": "",
                                    "parentCode": "JSGL",
                                    "child": []
                                },
                                {
                                    "name": "<span class='l'><input type='checkbox' class='input-check' id='check35'/><label for='check35'></label></span><strong>删除</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                                    "code":"SC",
                                    "icon": "",
                                    "parentCode": "JSGL",
                                    "child": []
                                }
                            ]
                        },
                        {
                            "name": "<span class='l'><image src='../images/list-sel.png'/><input type='checkbox' class='input-check' id='check23'/><label for='check23'></label></span><strong>会员信息管理</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                            "code":"HYXXGL",
                            "icon": "",
                            "parentCode": "HYGL",
                            "child": [
                                {
                                    "name": "<span class='l'><input type='checkbox' class='input-check' id='check36'/><label for='check36'></label></span><strong>会员信息管理</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                                    "code":"HYXXGL",
                                    "icon": "",
                                    "parentCode": "HYXXGL",
                                    "child":[]
                                },
                                {
                                    "name": "<span class='l'><input type='checkbox' class='input-check' id='check37'/><label for='check37'></label></span><strong>会员资料变更</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                                    "code":"HYZLBG",
                                    "icon": "",
                                    "parentCode": "HYXXGL",
                                    "child":[]
                                },
                                {
                                    "name": "<span class='l'><input type='checkbox' class='input-check' id='check38'/><label for='check38'></label></span><strong>变更历史查询</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                                    "code":"BGLSCX",
                                    "icon": "",
                                    "parentCode": "HYXXGL",
                                    "child":[]
                                }
                            ]
                        },
                        {
                            "name": "<span class='l'><image src='../images/list-sel.png'/><input type='checkbox' class='input-check' id='check24'/><label for='check24'></label></span><strong>消息列表</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                            "code":"XXLB",
                            "icon": "",
                            "parentCode": "HYGL",
                            "child": [
                                {
                                    "name": "<span class='l'><input type='checkbox' class='input-check' id='check39'/><label for='check39'></label></span><strong>查询</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                                    "code":"CX",
                                    "icon": "",
                                    "parentCode": "XXLB",
                                    "child":[]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "<span class='l'><image src='../images/list-sel.png'/><input type='checkbox' class='input-check' id='check13'/><label for='check13'></label></span><strong>药品管理</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                    "icon": "",
                    "code":"YPGL",
                    "parentCode": "XTQX",
                    "child": [
                        {
                            "name": "",
                            "code":"",
                            "icon": "",
                            "parentCode": "",
                            "child": []
                        }
                    ]
                },
                {
                    "name": "<span class='l'><image src='../images/list-sel.png'/><input type='checkbox' class='input-check' id='check14'/><label for='check14'></label></span><strong>药品管理</strong><b class='list_con' onclick='fun_size(600,300)'><image src='../images/edit.png'/></b><b><image src='../images/Item_Delete.png'/></b>",
                    "icon": "",
                    "code":"YPGL",
                    "parentCode": "XTQX",
                    "child": [
                        {
                            "name": "",
                            "code":"",
                            "icon": "",
                            "parentCode": "",
                            "child": []
                        }
                    ]
                }
            ]
        }];

    function tree(data) {
        for (var i = 0; i < data.length; i++) {
            var data2 = data[i];
            if (data[i].icon == "icon-th") {
                $("#rootUL").append("<li data-name='" + data[i].code + "'><a><i class='" + data[i].icon + "'></i> " + data[i].name + "</a></li>");
            } else {
                var children = $("li[data-name='" + data[i].parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + data[i].parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + data[i].parentCode + "'] > ul").append(
                    "<li data-name='" + data[i].code + "'>" +
                    "<a>" +
                    "<i class='" + data[i].icon + "'></i> " +
                    data[i].name +
                    "</a>" +
                    "</li>")
            }
            for (var j = 0; j < data[i].child.length; j++) {
                var child = data[i].child[j];
                var children = $("li[data-name='" + child.parentCode + "']").children("ul");
                if (children.length == 0) {
                    $("li[data-name='" + child.parentCode + "']").append("<ul></ul>")
                }
                $("li[data-name='" + child.parentCode + "'] > ul").append(
                    "<li data-name='" + child.code + "'>" +
                    "<a>" +
                    "<i class='" + child.icon + "'></i> " +
                    child.name +
                    "</a>" +
                    "</li>")
                var child2 = data[i].child[j].child;
                tree(child2)
            }
            tree(data[i]);
        }

    }
    tree(json)

});
$(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > a > strong').attr('title', '关闭');
    $('.tree li.parent_li > a > strong').on('click', function (e) {
        var children = $(this).parent().parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', '展开').siblings(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', '关闭').siblings(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
            e.stopPropagation();
    }); 

    $("#rootUL > li > ul >li").each(function(){
        $(this).find("ul > li").addClass("border-left");
    });
//向里外都选择
    $("#rootUL li input").on('click',function(){
        var ul = $(this).parents("ul");
        function cen_(){
            ul.each(function(i,e){
                var length = $(e).find(":checked").length;
                if(parseInt(length) > 0){
                    $(e).addClass("check_str");
                    $(this).prev("a").find("label").addClass("check_str");
                    $(this).prev("a").find("input").attr("checked",true);
                }else{
                    $(e).removeClass("check_str");
                    $(this).prev("a").find("label").removeClass("check_str");
                    $(this).prev("a").find("input").attr("checked",false);
                }
            }); 
        }
        cen_();
        if ($(this).is(":checked")) {
                $(this).next("label").addClass("check_str");
                $(this).closest("a").next("ul").find("label").addClass("check_str");
                $(this).closest("a").next("ul").find("input").attr("checked",true);
        }else{
                $(this).next("label").removeClass("check_str");
                $(this).closest("a").next("ul").find("label").removeClass("check_str");
                $(this).closest("a").next("ul").find("input").attr("checked",false);
                cen_();
        }
    });
//向里选择
    // $("#rootUL li input").on('click',function(){
    //     var ul = $(this).parents("ul");
    //     function cen_(){
    //             var length = $(this).find(":checked").length;
    //             if(parseInt(length) > 0){
    //                 $(this).addClass("check_str");
    //                 $(this).prev("a").find("label").addClass("check_str");
    //                 $(this).prev("a").find("input").attr("checked",true);
    //             }else{
    //                 $(this).removeClass("check_str");
    //                 $(this).prev("a").find("label").removeClass("check_str");
    //                 $(this).prev("a").find("input").attr("checked",false);
    //             }
    //     }
    //     cen_();
    //     if ($(this).is(":checked")) {
    //             $(this).next("label").addClass("check_str");
    //             $(this).closest("a").next("ul").find("label").addClass("check_str");
    //             $(this).closest("a").next("ul").find("input").attr("checked",true);
    //     }else{
    //             $(this).next("label").removeClass("check_str");
    //             $(this).closest("a").next("ul").find("label").removeClass("check_str");
    //             $(this).closest("a").next("ul").find("input").attr("checked",false);
    //             cen_();
    //     }
    // });
    //文件夹打开/关闭初始化
    $("#rootUL li strong").each(function(i,e){
            var tit = $(e).attr("title");
            if (tit =="关闭"){
                $(this).prev("span").find("img").attr("src","../images/folder-open.gif");
                $(e).prev(".l").find("img").attr("src","../images/folder-open.gif");
            }
            if (tit =="展开"){
                $(this).prev("span").find("img").attr("src","../images/list-sel.png");
                $(e).prev(".l").find("img").attr("src","../images/list-sel.png");
               }
    });
    //文件夹点击事件
    $("#rootUL li strong").on('click',function(){
        var ul = $(this).parents("ul").find("strong");
        ul.each(function(i,e){
            var tit = $(e).attr("title");
            if (tit =="关闭"){
                $(this).prev("span").find("img").attr("src","../images/folder-open.gif");
                $(e).prev(".l").find("img").attr("src","../images/folder-open.gif");
            }
            if (tit =="展开"){
                $(this).prev("span").find("img").attr("src","../images/list-sel.png");
                $(e).prev(".l").find("img").attr("src","../images/list-sel.png");
            }
        }); 
    })
    $(".treenav li a").on("click",function(){
        $(".treenav li a").removeClass("treenav_cur");
        $(this).addClass("treenav_cur");
    })
});