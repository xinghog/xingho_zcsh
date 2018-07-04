/*
 2016-10-7 众彩生活电商网
 BY 从小就很酷  1194794288@qq.com
 商品详情.js
 */
$(function(){
    //    头部顶部右边js
    $(".site-usw li").mouseenter(function(){
        $(this).addClass("center").children("em.keep,div.my").show();
    });
    $(".site-usw li").mouseleave(function(){
        $(this).removeClass("center").children("em.keep,div.my").hide();
    });
    //购物车
    $(".dropdown.shop").on("mouseenter",function(){
        $(this).children("em.keeb,div.trolley").show();
    })
    $(".dropdown.shop").mouseleave(function(){
        $(this).children("em.keeb,div.trolley").hide();
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
        $('body,html').animate({scrollTop:0},500);
    });
    //    商品详情
    $(".spxq_xqMapList li").each(function (e) {
        $(this).click(function () {
            $(".spxq_xqMapList li").removeClass("on");
            $(this).addClass("on");
            $(".spxq_xqMapListNr").each(function (i) {
                if (e == i) {
                    $(".spxq_xqMapListNr").hide();
                    $(this).show();
                }else {
                    $(this).hide();
                }
            });
        });
    });
    $(".spxq_qgAdd").click(function () {
        var num = $("#jq_num").val();
        if (num < 99) {
            num++;
        }
        $("#jq_num").val(num);
    });
    $(".spxq_qgRedu").click(function () {
        var num = $("#jq_num").val();
        if (num > 1) {
            num--;
        }
        $("#jq_num").val(num);
    });
//    地图
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(" 103.858894", "30.054217"), 15);
    var point = new BMap.Point(" 103.858894", "30.054217");
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point); // 创建标注
    map.clearOverlays();
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.addControl(new BMap.NavigationControl()); //添加默认缩放平移控件
//    放大的地图
    $('.spxq_xqMap_l .map_icon').click(function(){
        $('.map_fixed').show();
        var map2 = new BMap.Map("allmap2");
        map2.centerAndZoom(new BMap.Point(" 103.858894", "30.054217"), 17);
        var point2 = new BMap.Point(" 103.858894", "30.054217");
        map2.centerAndZoom(point2, 17);
        var marker2 = new BMap.Marker(point2); // 创建标注
        map2.clearOverlays();
        map2.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map2.addOverlay(marker2); // 将标注添加到地图中
        marker2.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        map2.addControl(new BMap.NavigationControl()); //添加默认缩放平移控件
    })
    $('.map_fixed .close').click(function(){
        $('.map_fixed').fadeOut(100);
    })

    //    到达指定楼层js
    $(".spxq_xqT>ul>li>code[rel='spxq_xqBt2']").on("click",function(){
        $('body,html').stop().animate({scrollTop:1008},500);
    })
    $(".spxq_xqT>ul>li>code[rel='spxq_xqBt3']").on("click",function(){
        $('body,html').stop().animate({scrollTop:1341},500);
    })
    $(".spxq_xqT>ul>li>code[rel='spxq_xqBt4']").on("click",function(){
        $('body,html').stop().animate({scrollTop:1610},500);
    })
    $(".spxq_xqT>ul>li>code[rel='spxq_xqBt5']").on("click",function(){
        $('body,html').stop().animate({scrollTop:5981},500);
    })
    $(".jq_spxq_xqBt1>code[rel='spxq_xqBt1']").on("click",function(){
        $('body,html').stop().animate({scrollTop:1008},100);
    })
    $(".jq_spxq_xqBt2>code[rel='spxq_xqBt2']").on("click",function(){
        $('body,html').stop().animate({scrollTop:1341},100);
    })
    $(".jq_spxq_xqBt3>code[rel='spxq_xqBt2']").on("click",function(){
        $('body,html').stop().animate({scrollTop:1610},100);
    })
    $(".jq_spxq_xqBt5>code[rel='spxq_xqBt4']").on("click",function(){
        $('body,html').stop().animate({scrollTop:5981},100);
    })
//    抓取屏幕到达多少
    $(window).scroll(function(){
        if($(document).scrollTop()>672){
            $(".spxq_xqT2").show();
        }else {
            $(".spxq_xqT2").hide();
        };
        if($(document).scrollTop()<345){
            $(".li1").addClass("on").siblings().removeClass("on")
        }
        if($(document).scrollTop()>970){
            $(".jq_spxq_xqBt1").addClass("on").siblings().removeClass("on");
        }
        if($(document).scrollTop()>1320){
            $(".jq_spxq_xqBt2").addClass("on").siblings().removeClass("on");
        }
        if($(document).scrollTop()>1605){
            $(".jq_spxq_xqBt3").addClass("on").siblings().removeClass("on");
        }
        if($(document).scrollTop()>5980){
            $(".jq_spxq_xqBt5").addClass("on").siblings().removeClass("on");
        }
    })
//    以上的js用于商品详情通用
//    图片延缓加载
    $("img.lazy").attr("src","images/loading.gif")
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
})
