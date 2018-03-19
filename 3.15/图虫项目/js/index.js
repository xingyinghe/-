$(function(){
    slider();
    swiper();
    searchBar();
});


/**
 * 当页面滚动不超过轮播图时，随着滚动搜索栏的透明度越高
 * 当页面滚动超过轮播图时，透明度固定不变
 */

function searchBar(){
    // 1. 获取jd_header_box
    var headerBox = document.querySelector('.tc_nav');
    var backTop = document.querySelector('.back-top');
    // 2. 获取jd_banner
    var banner = document.querySelector('.tc_banner');
    // 3. 获取jd_banner的高度
    var height = banner.offsetHeight;
    var opacity = 0;
    // 4. 绑定window的滚动事件
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 5. 判断scrollTop是否小于jd_banner的高度
        if(scrollTop < height) {
            // 6. 是的，scrollTop占jd_banner的高度的百份比乘以0.85
            opacity = scrollTop / height * 0.85;
            backTop.style.display = 'none';
        } else {
            // 7. 否则，透明度就是0.85
            opacity = 0.85;
            backTop.style.display = 'block';
        }
        headerBox.style.background = 'rgba(26, 26, 26, ' + opacity + ')';
    }
}




//轮播图
function slider(){
    $(window).on('resize',function(){
        //获取浏览器窗口宽度
        var width = $(window).width();
        if(width<768){
            var isMobile = true;
        }else{
            var isMobile = false;
        }
        //作为小，中，大屏幕的背景图数据和作为超小屏幕的图片数据在json中
        var json = [
            {
                bac:"url(img/banner1.jpg)",
                img:"img/banner1.jpg"
            },
            {
                bac:"url(img/banner2.jpg)",
                img:"img/banner2.jpg"
            },
            {
                bac:"url(img/banner1.jpg)",
                img:"img/banner1.jpg"
            },
            {
                bac:"url(img/banner2.jpg)",
                img:"img/banner2.jpg"
            }

        ];
        //var data = {"json":json,"isMobile":isMobile} //es5写法
        var data = {json,isMobile};//es6语法
        var html = template("slider",data);//可以得到编译好的纯html
        //选中slider的容器,并渲染
        $("#inner").html(html);

        //bootstrap的轮播图没有滑动功能，自己添加
        var isMove = false;
        var startX = 0;
        var moveX = 0;
        var distanceX = 0;


        $("#inner").on("touchstart",function(e){
            startX = e.originalEvent.touches[0].clientX;
        });
        $("#inner").on("touchmove",function(e){
            moveX = e.originalEvent.touches[0].clientX;
            isMove = true;
        });
        $("#inner").on("touchend",function(e){
            distanceX = moveX - startX;
            if(isMove){
                if(distanceX>0){
                    //前一张
                    $("#carousel-example-generic").carousel('prev');
                }else if(distanceX<0){
                    //后一张
                    $("#carousel-example-generic").carousel('next');
                }
            }
            //滑动完成后把所有值重置回初始值
            isMove = false;
            startX = 0;
            moveX = 0;
            distanceX = 0;
        });
    }).trigger("resize")
}

// 滑动
function swiper(){
    var $parent = $(".wjs_product_tabs_parent");
    var $ul = $parent.find("ul");
    var $lis = $ul.find("li");
    var sum = 0;
    //index表示遍历到的li的索引，item表示遍历到的哪个li(Dom)
    $lis.each(function(index,item){
        sum+=$(item).innerWidth();
    })
    $ul.width(sum);
    wjs.iScroll({
        swipeDom:$parent[0],
        swipeType:"x",
        swipeDistance:20
    })

}