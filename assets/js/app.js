(function(){

// set page height
$('#intro').css({height:$(window).height()-46 + 'px'});

$('#about, #about-content, #research, #research-content, #questions').css({height:$(window).height()-46});

// desktop menu 
$('#to-about').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
})

$('#to-research').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#research').offset().top -46}, 500);
})

// tablet menu 
$('#menu').on('click', function(e){
	e.preventDefault();
	$(this).addClass('on');
	$('#mobile-nav').fadeIn(300);
	$('#menu-close').show();
})

$('header').on('click', '#menu-close', function(e){
	e.preventDefault();
	$('#menu').removeClass('on');
	$('#mobile-nav').fadeOut(300);
	$(this).hide();
})

$('#mobile-to-about').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
	$('#menu').removeClass('on');
	$('#menu-close').hide();
	$('#mobile-nav').fadeOut(300);
})

$('#mobile-to-research').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#research').offset().top -46}, 500);
	$('#menu').removeClass('on');
	$('#menu-close').hide();
	$('#mobile-nav').fadeOut(300);
})

// initialize skrollr
if($(window).width() > 767){
	skrollr.init({
            forceHeight: false
    });
}

// in-page navigation
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

}());


	
