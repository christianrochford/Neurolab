$(document).ready(function(){
	$('#menu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('on');
		$('nav').toggleClass('on');
		$('#wrapper').toggleClass('menu');
	})
});

$(document).ready(function(){
	$('#intro').css({height:$(window).height()-46 + 'px'});
});