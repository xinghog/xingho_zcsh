/**
 * Created by 从小就很酷 on 2016/10/8.
 * malll 1194794288@qq.com
 * 众彩生活电商网 商家详情页.js
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
    //页面缓存加载
    function lazy(){
        if($("img.lazy").length==0){
            $(window).off(".lazy")
        }
        $("img.lazy").each(function(){
            if($(this).offset().top<$(window).height()+$(window).scrollTop()){
                $(this).attr("src",$(this).data("src")).removeClass("lazy")
            }else {
                return false;
            }
        })
    }
    lazy()
    $(window).on("scroll.lazy resize.lazy",lazy)
    //位置定位
    //    地图
    // 百度地图API功能
    var map = new BMap.Map("almipdd");
    map.centerAndZoom(new BMap.Point(" 103.858894", "30.054217"), 15);
    var point = new BMap.Point(" 103.858894", "30.054217");
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point); // 创建标注
    map.clearOverlays();
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.addControl(new BMap.NavigationControl()); //添加默认缩放平移控件
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