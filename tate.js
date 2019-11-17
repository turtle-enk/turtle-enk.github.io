var cookie = $.cookie('cookie');	
if(cookie){
	$('.js-count-num').text(cookie);
}
else{
	$('.js-count-num').text(0);
}
var count = $('.js-count-num').text();
$('.js-count-btn').on('click',function(){
	count++;
	$.cookie( "cookie",count);
	$('.js-count-num').text(count);
});
$('.js-reset-btn').on('click',function(){
	count = 0;
	$.removeCookie( "cookie");
	$('.js-count-num').text(count);
});
