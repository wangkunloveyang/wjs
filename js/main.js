$(function(){
function resize(){
//当文档加载完成以后执行的函数
//获取屏幕宽度
var windowWidth = $(window).width();
//判断屏幕是属于大还是小
var isSmallScreen = windowWidth
< 768;
//根据屏幕大小为屏幕上的每一张轮播图设置背景
$('#main_ad > .carousel-inner > .item').each(function(i, item) {
	var $item = $(item);
	$item.css({
				'backgroundImage': 'url('+$item.data('image-lg')+')'
			});
	if(isSmallScreen){
				$item.html('<img src="'+$item.data('image-xs')+'">');
	}else{
				$item.empty();
		}
	});
	}
	$(window).on('resize',resize).trigger('resize');
	$('.badge').tooltip();

	
	resizeUlWidth();
	$(window).resize(function () { 
     resizeUlWidth();
});
	var $newsTitle = $('#news .news-title');
	$('#news .nav-pills a').on('click',function(){
		var $this = $(this);
		var $title = $this.data('title');
		$newsTitle.text($title);
	});
	
	//1.获取手指在轮播图上面的滑动方向
	//手指触摸开始时记录一下x的坐标
	//获取界面上的轮播图容器
	var $carousels = $(".carousel");
	var statX , endX;
	var offset = 50;
	//注册滑动事件
	$carousels.on('touchstart',function(e){
		statX = e.originalEvent.targetTouches[0].clientX;
	});
	$carousels.on('touchmove',function(e){
		endX = e.originalEvent.targetTouches[0].clientX;
	});
	$carousels.on('touchend',function(){
		var distance = Math.abs(endX - statX);
	console.log(distance);
	// 2.根据手指的方向获取上一张或者下一张
	if(distance >= offset){
		$(this).carousel(endX > statX ? 'prev' : 'next');
	}
	});

	
	
	
});

function resizeUlWidth(){
	if($(window).width() < 768){
	var $ulWrapper = $('.nav-tabs');
	var ulWidth = 30;
	var $lis = $ulWrapper.children();
	$lis.each(function(index, el) {
		ulWidth += $(el).width();
	});
	$ulWrapper.css(
		 'width',ulWidth
	);
	$('.ul-wrapper').css('overflow-x','scroll');
	}
}
