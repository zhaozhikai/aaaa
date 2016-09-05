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