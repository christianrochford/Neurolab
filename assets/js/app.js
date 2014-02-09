(function(){

// set page height

$('#intro, #about, #about-content, #research, #research-content, #news-img, #pubs-img').css({height:$(window).height()-46 + 'px'});
if($(window).width()>320){
	$('#questions').css({height:$(window).height()-46 + 'px'});
} else {
	$('#questions').css({height:$(window).height()+ 10 + 'px'});
}
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

//initialize flexslider
$(window).load(function() {
  $('.flexslider').flexslider();
});

// in-page navigation
$('#intro-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
})
$('#about-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#about-content').offset().top -46}, 500);
})
$('#about-content-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#research').offset().top -46}, 500);
})
$('#research-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#research-content').offset().top -46}, 500);
})
$('#research-content-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#questions').offset().top -46}, 500);
})
$('#news-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#news').offset().top -46}, 500);
})
$('#pubs-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#pubs').offset().top -46}, 500);
})

// initialise vertical slider
$(function(){
	Slider.init();
});

// alumni modal
$('#alumni').on('click', function(e){
	e.preventDefault();
	$('#alumni-modal').fadeIn(300);
	$(this).hide();
})
$('#alumni-close').on('click', function(e){
	e.preventDefault();
	$('#alumni-modal').fadeOut(300);
	$('#alumni').show();
})

// publications
$('.read-abstract').on('click', function(){
	$('.abstract').slideUp(300);
	$(this).prev().slideToggle(300);
	$(this).addClass('open');
})
$('.read-abstract.open').on('click', function(){
	$('.abstract').slideUp(300);
	$(this).removeClass('open');
})

}());