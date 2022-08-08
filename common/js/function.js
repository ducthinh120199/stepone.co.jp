
jQuery(function($) {
  var str = window.location.href;
//scroll-------------------------------------------------
  jQuery('a[href*=#]').click(function() {		
      var $target = jQuery(this.hash);
      $target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        targetOffset = $target.offset().top;
        
        jQuery((navigator.userAgent.indexOf("Opera") != -1) ? document.compatMode == 'BackCompat' ? 'body' : 'html' :'html,body').animate({scrollTop: targetOffset}, 1000);
       return false;
      }
  });
		
  //pagetop-------------------------------------------------
   
     var topBtn = jQuery('#js-ptop');	
    topBtn.click(function () {
        jQuery('body,html').animate({
           scrollTop: 0
          }, 1000);
          return false;
    });

  
  //menu-------------------------------------------------
  //button
  jQuery(".menubt").click(function(){
    jQuery(".top").toggleClass("menuclick1");
  });
  
  jQuery(".menubt").click(function(){
    jQuery(".middle").toggleClass("menuclick2");
  });
  
  jQuery(".menubt").click(function(){
    jQuery(".bottom").toggleClass("menuclick3");
  });

// //window
  jQuery('.menubt').on('click', function() {
    jQuery('.l-header__right').slideToggle();
  });

//menu close
  jQuery('nav a').on('click', function(){
    if (window.innerWidth <= 768) {
     jQuery('.menubt').click();
   }
  });
});


jQuery(function($) {
  var toggle = $('.js-nav-toggle');
  var menu = $('.js-nav-menu');

  toggle.on('click',function(){
    $(this).toggleClass('active');
    menu.toggleClass('active');
  });
});

jQuery(function($) {
  $(window).on('load scroll',function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $('.l-header').addClass('fixed');
    }
    else {
      $('.l-header').removeClass('fixed');
    }
  });
});

/* slick
-------------------------------------------------*/
jQuery(function ($) {
  var width = $(window).width();
  if (width <= 768) {
    $('.p-frame3-top .p-frame__list').slick({
      dots: true,
      arrows: false,
      speed: 1000,
      autoplaySpeed: 4000,
      autoplay: true,
    });

    $('.p-frame4-top .p-frame__list').slick({
      dots: true,
      arrows: false,
      speed: 1000,
      autoplaySpeed: 4000,
      autoplay: true,
    });
  }
})





				


