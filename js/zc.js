/*
 2016-10-7 众彩生活电商网 
 BY 从小就很酷  1194794288@qq.com
 首页(index).js
  */
 $(function(){
 	//    头部顶部右边js
    $(".site-usw li").mouseenter(function(){
        $(this).addClass("center").children("em.keep,div.my").show();
    });
    $(".site-usw li").mouseleave(function(){
        $(this).removeClass("center").children("em.keep,div.my").hide();
    });
    //    商品分类
    $(".mast_lFet>.cate-nav>ul>li").mouseenter(function(){
        $(this).addClass("cneter").children("em.bord,em.keeb,div.menu_flklist2").show();
    });
    $(".mast_lFet>.cate-nav>ul>li").mouseleave(function(){
        $(this).removeClass("cneter").children("em.bord,em.keeb,div.menu_flklist2").hide();
    });
    //    幻灯
    $('#demo01').flexslider({
        animation: "slide",
        direction:"horizontal",
        easing:"swing",
        slideshowSpeed: 3000
    });
    //    楼层js
    $(".itemlist>li").on("mouseenter",function(){
            var phy=$(this).children("a.item_pic");
            phy.children("div.site").css("display","block");
    })
    $(".itemlist>li").on("mouseleave",function(){
        var phy=$(this).children("a.item_pic");
        phy.children("div.site").css("display","none");
    })
//    右侧导航
    $(window).on("scroll",function(){
        var ling = $(document).scrollTop();
        if(ling>900){
            $(".sidecate").show();
            $(".Top").css("display","block");
        }else{
            $(".sidecate").hide();
            $(".Top").css("display","none");
        };
        if(ling>920 && ling<1874){
            // 让第一层的数字隐藏，文字显示，让其他兄弟元素的li数字显示，文字隐藏
            $('.sidecate a').eq(0).find('.num').hide().siblings('.word').show();
            $('.sidecate a').eq(0).siblings('a').find('.num').show().siblings('.word').hide();
        };
        if(ling>2005 && ling<2622){
            $('.sidecate a').eq(1).find('.num').hide().siblings('.word').show();
            $('.sidecate a').eq(1).siblings('a').find('.num').show().siblings('.word').hide();
        };
        if(ling>2697 && ling<3605){
            $('.sidecate a').eq(2).find('.num').hide().siblings('.word').show();
            $('.sidecate a').eq(2).siblings('a').find('.num').show().siblings('.word').hide();
        };
        if(ling>3453){
            $('.sidecate a').eq(3).find('.num').hide().siblings('.word').show();
            $('.sidecate a').eq(3).siblings('a').find('.num').show().siblings('.word').hide();
        };
    });
//扫描二维码下载APP
    $(".e_app").on("mouseenter",function(){
        $(this).css("background","#ffffff").children("div.er_APP").show();
    });
    $(".e_app").on("mouseleave",function(){
        $(this).css("background","#f5f5f5").children("div.er_APP").hide();
    });
//    返回顶部
    $(".go-top-2").on("click",function(){
        $('body,html').animate({scrollTop:0},100);
    });
    //添加购物车开始
    	 $(".sy_buy_nr ul.itemlist li a.shop").on("click",function(){
            	layer.msg("添加购物车成功");
				var li='<li>'+
                    '<a class="jq_delete del" rel="1" href="javascript:">删除</a>'+
                    '<div class="pub_img fl"><a href=""><img src="../../images/thumb_57ba4e06442a1.jpg" width="80" height="60"></a></div>'+
                    '<div class="pub_wz">'+
                    '<p class="overflow_clear"><a href="javascript:">测试使用优惠劵商品 <span></span></a></p>'+
                    '<p class="price pointcl">¥387</p>'+
                    '</div>'+'</li>'
                    $("div.trolley ul").append(li);
                    $("div.trolley ul li").addClass("topTwo_cart_list")
                    $(".jq_delete").on("click",function(){
                    	$(this).parent("li.topTwo_cart_list").remove();
                    })
                    return false;
            	})
           			 $(".see_more a").on("click",function(){
                    	if($("div.trolley ul li").length==0){
                    		layer.msg("您还没有添加商品哦")
                    	}else{
                    		window.location.href="member/buy/orders.html"
                    	}
                    })
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
 })
