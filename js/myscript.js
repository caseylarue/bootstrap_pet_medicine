$(function() {

	"use strict";

	var topoffset = 50;  // variable for menu height

	//activate scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});

	// add an inbody calls to scrollspy when event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
		var hash = $(this).find('li.active a').attr('href');
		if(hash !== '#my-carousel'){
			$('header nav').addClass('inbody');
		}
		else {
			$('header nav').removeClass('inbody');
		}
	});

	$('.carousel').carousel({
	 interval: false
	})


  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
  
});
