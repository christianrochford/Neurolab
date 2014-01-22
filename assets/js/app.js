$(document).ready(function(){
	$('#menu').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('on');
		$('nav').toggleClass('on');
		$('#wrapper').toggleClass('menu');
	})
});

$(document).ready(function(){
	$('#intro, #about, #research, #questions').css({height:$(window).height()-46 + 'px'});
});

$(document).ready(function(){
	$('#intro-arrow-down').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
	})
	$('#about-arrow-down').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $('#research').offset().top -46}, 500);
	})
	$('#research-arrow-down').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $('#questions').offset().top -46}, 500);
	})
});