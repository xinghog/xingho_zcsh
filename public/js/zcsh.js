/*
 2016-10-7 众彩生活电商网 
 BY 从小就很酷  1194794288@qq.com
 分类页面，个人中心通用.js
  */
 $(function(){
 	//    头部顶部右边js
    $(".site-usw li").mouseenter(function(){
        $(this).addClass("center").children("em.keep,div.my").show();
    });
    $(".site-usw li").mouseleave(function(){
        $(this).removeClass("center").children("em.keep,div.my").hide();
    });
    //商品分类
    $(".mast_lFet>.cate-nav>ul>li").mouseenter(function(){
        $(this).addClass("cneter").children("em.bord,em.keeb,div.menu_flklist2").show();
    });
    $(".mast_lFet>.cate-nav>ul>li").mouseleave(function(){
        $(this).removeClass("cneter").children("em.bord,em.keeb,div.menu_flklist2").hide();
    });
    $(".classification").on("mouseenter",function(){
        $(".triangle").css("transform","rotate(180deg)");
        $("div.cate-nav").show();
    });
    $(".classification").on("mouseleave",function(){
        $(".triangle").css("transform","rotate(0deg)");
        $("div.cate-nav").hide();
    });
    $("div.cate-nav").on("mouseenter",function(){
        $(".triangle").css("transform","rotate(180deg)");
        $(this).show();
    });
    $("div.cate-nav").on("mouseleave",function(){
        $(".triangle").css("transform","rotate(0deg)");
        $(this).hide();
    });
    //扫描二维码下载APP
    $(".e_app").on("mouseenter",function(){
        $(this).css("background","#ffffff").children("div.er_APP").show();
    });
    $(".e_app").on("mouseleave",function(){
        $(this).css("background","#f5f5f5").children("div.er_APP").hide();
    });
    $(document).on("scroll",function(){
        var ling = $(document).scrollTop();
        if(ling>300){
            $(".Top").css("display","block");
        }else{
            $(".Top").css("display","none");
        };
    })
//    返回顶部
    $(".go-top-2").on("click",function(){
        $('body,html').animate({scrollTop:0},100);
    });
     //购物车
     $(".dropdown.shop").on("mouseenter",function(){
         $(this).children("em.keeb,div.trolley").show();
     })
     $(".dropdown.shop").mouseleave(function(){
         $(this).children("em.keeb,div.trolley").hide();
     });
     //    体现
     $(".password_input>div.lef>select.manageInput").change(function(){
         var select=$(".password_input div.lef select.manageInput option:selected");
         var t=$(".password_input div.left i");
         if(select.val()=="支付宝"){
             $(".password_input.Name").hide();
             t.html("支付宝账户");
         }else if(select.val()=="微信"){
             $(".password_input.Name").hide();
             t.html("微信账号");
         }else if(select.val()=="财付通"){
             $(".password_input.Name").hide();
             t.html("财付通账号");
         }else if(select.val()=="银行卡"){
             $(".password_input.Name").show();
             t.html("银行卡号");
         }
     })
//    折扣商城js
    $(".nearbuy_sxkLi input").click(function () {
        if ($(this).prop('checked') == true) {
            location.href = $(this).attr('rel');
        } else {
            location.href = $(this).attr('data');
        }
    });
     $(".site-mast__keep a").click(function(){
         layer.alert('您的浏览器限制！按住Ctel+D收藏本站', {
             title:"众彩提示",
             skin: 'layui-layer-lan'
             ,closeBtn: 0
             ,shift: 4 //动画类型
         });
     })
    
//位置定位
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    function myFun(result){
        var cityName = result.name;
        map.setCenter(cityName);
        $("#allmap").html(cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
 })
