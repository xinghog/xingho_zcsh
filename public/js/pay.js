/**
 * Created by Administrator on 2016/10/8.
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
   //   支付订单
    function changetotal(num) {
        var price = "35.9";
        $(".price").html('¥' + (Math.round(price * num * 100) / 100));
        $(".min_total span").html(Math.round(price * num * 100) / 100);
    }

    $(".jia").click(function () {
        var num = $("#text_box").val();
        if (num < 99) {
            num++;
        }
        $("#text_box").val(num);
        changetotal(num);
    });
    $(".jian").click(function () {
        var num = $("#text_box").val();
        if (num > 1) {
            num--;
        }
        $("#text_box").val(num);
        changetotal(num);
    });
    $("#text_box").keyup(function () {
        var num = $("#text_box").val();
        if (num > 99) {
            layer.msg("抱歉，您最多能买99件！");
            $("#text_box").val(99);
            changetotal($(this).val());
        } else if (num <= 0) {
            $("#text_box").val(1);
            changetotal($(this).val());
        } else {
            changetotal($(this).val());
        }
    });
    $(".subtn").on("click",function(){
        window.location.href="manner.html";
        return false;
    })
})