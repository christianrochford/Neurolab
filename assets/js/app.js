$(document).ready(function(){
	if($(window).width() <= 767){
		$('#to-about').on('click', function(e){
			e.preventDefault();
			// var stateObj1 = { foo: "about" };
			// var newTitle1 = "about";
			// var newUrl1 = "about";
			// history.pushState(stateObj1, newTitle1, newUrl1);
			$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
			$('nav').fadeOut(300);
			$('#menu').removeClass('on');
			$('#menu-close').hide();
		})
		$('#to-research').on('click', function(e){
			e.preventDefault();
			// var stateObj2 = { foo: "research" };
			// var newTitle2 = "research";
			// var newUrl2 = "research";
			// history.pushState(stateObj2, newTitle2, newUrl2);
			$('html, body').animate({scrollTop: $('#research').offset().top -46}, 500);
			$('nav').fadeOut(300);
			$('#menu').removeClass('on');
			$('#menu-close').hide();
		})
	} else {
		$('#to-about').on('click', function(e){
			$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
		})
		$('#to-research').on('click', function(e){
			$('html, body').animate({scrollTop: $('#research').offset().top -46}, 500);
		})
	}
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
});

$(document).ready(function(){
	$('#intro').css({height:$(window).height()-46 + 'px'});
	$('#about, #about-content, #research, #research-content, #questions').css({height:$(window).height()-46});
	if($(window).width() > 767){
		skrollr.init({
                forceHeight: false
        });
	}
});

$(window).resize(function(){
	if($(window).width() > 767){
		$('nav').show();
		skrollr.init({
                forceHeight: false
        });
        $('#to-about').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
			$('nav').show();
			$('#menu').removeClass('on');
			$('#menu-close').hide();
		})
		$('#to-research').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop: $('#research').offset().top -46}, 500);
			$('nav').show();
			$('#menu').removeClass('on');
			$('#menu-close').hide();
		})
	} else {
		$('nav').hide();
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
	}
})

$(document).ready(function(){
	$('#intro-arrow-down').on('click', function(){
		$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
	})
	$('#about-arrow-down').on('click', function(){
		$('html, body').animate({scrollTop: $('#about-content').offset().top -46}, 500);
	})
	$('#about-content-arrow-down').on('click', function(){
		$('html, body').animate({scrollTop: $('#research').offset().top -46}, 500);
	})
	$('#research-arrow-down').on('click', function(){
		$('html, body').animate({scrollTop: $('#research-content').offset().top -46}, 500);
	})
	$('#research-content-arrow-down').on('click', function(){
		$('html, body').animate({scrollTop: $('#questions').offset().top -46}, 500);
	})
});