
		$('.tex input').focus(function(){
			if($('.tex input').val('')=='Search'){
				$('.tex input').val('');
			}
		})
		$(".tex input").blur(function(){
	$(".tex input").val("Search");
})

