/**
 * Created by 众彩生活 on 2016/9/12.
 */
$(function() {
    var good='<div class="ie">'+'<div class="modall"></div><div class="cent">'+'<h2><strong>警告!</strong> 您正在使用低版本的IE浏览器浏览本站，低版本的浏览器存在大量<em>安全漏洞!</em>您目前使用的IE版本为  <span>IE9</span></h2>'
    +'<h3>低版本的浏览器容易受到病毒脚本侵入和视觉上及使用上的差异，本站建议您升级你的浏览器！推荐你使用以下浏览器，安装完成后重新浏览本站</h3>'
    +'<div><a href="http://www.firefox.com.cn/" title="火狐浏览器" target="_blank">火狐浏览器</a><a href="http://www.chromeliulanqi.com/" title="谷歌浏览器" target="_blank">谷歌浏览器</a>'
    +'<a href="http://se.360.cn/" title="360浏览器" target="_blank">360浏览器</a><a href="http://browser.qq.com/?adtag=SEM12" title="QQ浏览器" target="_blank">QQ浏览器</a></div>'
    +'</div></div>'
    var a='<a href="javascript:" class="jixu">继续使用</a>'
    if(navigator.userAgent.indexOf("MSIE")>0){
        if(navigator.userAgent.indexOf("MSIE 6.0")>0){
            $("body").append(good);
            $(".ie div.cent h2 span").html("IE6")
        }
        if(navigator.userAgent.indexOf("MSIE 7.0")>0){
            $("body").append(good);
            $(".ie div.cent h2 span").html("IE7")
        }
        if(navigator.userAgent.indexOf("MSIE 8.0")>0){
            $("body").append(good);
            $(".ie div.cent h2 span").html("IE8")
        }
          if(navigator.userAgent.indexOf("MSIE 9.0")>0){
              $("body").append(good);
              $(".ie div.cent h2 span").html("IE9");
              $(".ie div.cent div").append(a);
           	  $(".jixu").on("click",function(){
           	  	$(".ie ").remove()
           	  })
          }
    }

});