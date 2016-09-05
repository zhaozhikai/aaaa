$(function(){
	$(document.body).css('display','none');
	var ww = $(document.body).width();
	var f = (100 / 640) * ww;
	$('html').eq(0).css({'fontSize':f+'px'});
	$(document.body).css('display','block');
})