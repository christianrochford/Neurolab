$(document).ready(function(){
	$('#menu').on('click', function(e){
		e.preventDefault();
		$(this).addClass('on');
		$('nav').fadeIn(300);
		$('#menu-close').show();
	})
	$('header').on('click', '#menu-close', function(e){
		e.preventDefault();
		$('#menu').removeClass('on');
		$('nav').fadeOut(300);
		$(this).hide();
	})
	$('#to-about').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
		$('nav').fadeOut(300);
		$('#menu').removeClass('on');
		$('#menu-close').hide();
	})
	$('#to-research').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $('#research').offset().top -46}, 500);
		$('nav').fadeOut(300);
		$('#menu').removeClass('on');
		$('#menu-close').hide();
	})
});

$(document).ready(function(){
	$('#intro, #about, #about-content, #research, #research-content, #questions').css({height:$(window).height()-46 + 'px'});
	if($(window).width() > 767){
		skrollr.init({
                forceHeight: false
        });
	}
});

$(document).ready(function(){
	$('#intro-arrow-down').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
	})
});