(function(){

// set page height

$('#intro, #research, #team-img, #pubs-img').css({height:$(window).height()-47 + 'px'});

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

// Custom scrollbar
$(document).ready(
    function() {  
      $('html').niceScroll({
      	cursorcolor: 'rgba(62,117,187,0.5)',
      	cursorwidth: '8px',
      	cursorborder: 'none',
      	cursorborderradius: '0',
      	cursoropacitymin: '3',
      	cursoropacitymax: '8'
      });
    }
  );

// initialize skrollr
if($(window).width() > 868){
	skrollr.init({
        forceHeight: false
    });
}

// in-page navigation
$('#intro-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#about').offset().top -46}, 500);
})
$('#research-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#research-content').offset().top -46}, 500);
})
$('#team-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#team').offset().top -46}, 500);
})
$('#pubs-arrow-down').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#pubs').offset().top -46}, 500);
})

$('#carousel').flexslider({
    animation: "slide",
    controlNav: true,
    directionNav: true,
    animationLoop: false,
    slideshow: false,
    touch: true,
    itemWidth: 300,
    itemMargin: 0,
    asNavFor: '#team-slider'
  });
   
  $('#team-slider').flexslider({
    animation: "fade",
    controlNav: false,
    directionNav: false,
    animationLoop: true,
    slideshow: false,
    touch: true,
    animationSpeed: 0,
    sync: "#carousel"
  });

  $(window).load(function(){
  	$('#tweets').flexslider({
	  	animation: "fade",
	    controlNav: false,
	    directionNav: false,
	    animationLoop: true,
	    slideshow: true,
	    touch: false,
	    animationSpeed: 500
	  });
  	$('#news').flexslider({
	  	animation: "fade",
	    controlNav: false,
	    directionNav: false,
	    animationLoop: true,
	    slideshow: true,
	    touch: false,
	    animationSpeed: 500
	  });
  })

 $('#carousel').on('click','img',function(){
 	$('#carousel img').removeClass('on');
 	$(this).addClass('on');
 })
 $('#carousel').on('click','h4',function(){
 	$('#carousel img').removeClass('on');
 	$(this).prev().addClass('on');
 })
 $('#carousel ul li:first-child img').addClass('on');

// modals
$('#button-wrap').waypoint(function(direction){
	$(this).toggleClass('visible');
}, { offset: '50%' });

$('#extra').on('click',function(e){
	$('#button-wrap').addClass('open');
	e.stopPropagation();
})
$('#wrapper').on('click', function(){
	$('#button-wrap').removeClass('open');
})
$('#title').on('click', function(){
	$('html, body').animate({scrollTop: 0}, 500);
	$('#extra-modal').fadeIn(300);
	$('#button-wrap').removeClass('open');
})
$('#jobs').on('click', function(){
	$('html, body').animate({scrollTop: 0}, 500);
	$('#positions-modal').fadeIn(300);
	$('#button-wrap').removeClass('open');
})
$('.theme').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: 0}, 500);
	var number = $(this).attr('rel');
	var link = '#theme-modal-' + number;
	$(link).fadeIn(300);
})
$('.technique').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: 0}, 500);
	var number = $(this).attr('rel');
	var link = '#technique-modal-' + number;
	$(link).fadeIn(300);
})
$('.icon-close-modal').on('click', function(e){
	e.preventDefault();
	$('#extra-modal').fadeOut(300);
	$('#positions-modal').fadeOut(300);
	$('.research-modal').fadeOut(300);
})
$('*').not('.button-wrap').not('#extra').click(function(){
	$('#button-wrap').removeClass('open');
})

// publications
$('.more-wrap').hover(
	function(){
		$(this).addClass('hover');
	},
	function(){
		$(this).removeClass('hover');
	})
$('.more-wrap').on('click', function(){
	if($(this).hasClass('open')){
		$(this).prev().slideUp(300);
		$(this).removeClass('open');
		$(this).find('.read-abstract').show();
		$(this).find('.icon-angle-up').hide();
	} else {
		$('.abstract').slideUp(300);
		$(this).prev().slideDown(300);
		$(this).addClass('open');
		$('.read-abstract').show();
		$('.icon-angle-up').hide();
		$(this).find('.read-abstract').hide();
		$(this).find('.icon-angle-up').show();
	}
})

}());