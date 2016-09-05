/*分享显示隐藏*/
var fen=document.getElementById("fen");
var fenxiang=document.getElementById("fenxiang");
fen.onclick=function(){
	if(fenxiang.style.display=="block"){
		fenxiang.style.display="none";
	}else{
		fenxiang.style.display="block";
	}
	
}
$('#fabu').click(function(){
			$('#gd').css('display','block');
	})
		
		$('#xpl').focus(function(){
			$('#xpl').val('');
		})
		$('#pl1').click(function(){
			$('#gd').css('display','none');
		})
		$('.last').click(function(){
			var pl=$('<div class="liu3"><div class="liua"><img src="img/liutou.png"/></div><div class="liub"><p class="liuc"><span>娃娃脸wq</span><span>1小时前</span></p><p class="liud">'+$('.xpl').val()+'</p></div></div>');

			 $(".liu1").before(pl);
		})
