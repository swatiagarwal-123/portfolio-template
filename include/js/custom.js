jQuery(document).ready(function($){

/*==========================*/  
/* hero slider */  
/*==========================*/

$(".hero-slider").owlCarousel({
    items: 1,
    itemsscroll:1,
    loop: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:450,
    mouseDrag: false,
    touchDrag: false,
    autoPlay : 5000,
    pullDrag: false,
    rewind: true,
    autoplay: true,
    margin: 0,
    nav: true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        600:{
            items:1,
            nav:true,
            dots:false
        }
      }
  });

/*==========================*/  
/* work slider */  
/*==========================*/
$('.testimonial-list').owlCarousel({
    loop:true,
    autoWidth:false,
    nav:true,
    dots:false,
    autoPlay : 500, 
    autoplay: true,
    items: 1,
    itemsscroll:1,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:1,
            nav:false,
            dots:true
        },
        1000:{
            items:1,
            nav:true,
            dots:false
        }     
    }
});

/*==========================*/  
/* work slider */  
/*==========================*/
$('.work-list').owlCarousel({
    loop:true,
    autoWidth:false,
    nav:true,
    dots:false, 
    autoPlay : 500, 
    autoplay: true,
    items: 4,
    itemsscroll:2,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            dots:false,
            loop:true
        }
    }
});

/*==========================*/  
/* Skill Bar Animate */  
/*==========================*/
jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
    },4000);
});


/*==========================*/  
/* Scroll on animate */  
/*==========================*/
function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '92%',
        });
 
  
  });

}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );



/*==========================*/  
/* Animated Number  */  
/*==========================*/
  
  $('.timer').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });
 
      // start all the timers
      $('.timer').each(count);
 
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    
   $('.stat-container .timer').waypoint(function() {
    $('.stat-container .timer').not('.animated').each(count);
  $('.stat-container .timer').addClass('animated');
},{offset: '95%'});
 



/*==========================*/  
/* Lighbox */ 
/*==========================*/  
$('.work-list').magnificPopup({
  delegate: '.work-zoom', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery: {
  enabled: true,
  preload: [0,2], 
  removalDelay: 300,
  navigateByImgClick: true,
  titleSrc: 'title', 
  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  tPrev: 'Previous (Left arrow key)', // title for left button
  tNext: 'Next (Right arrow key)', // title for right button
  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
}
});


/*==========================*/  
/* Skill Bar Animate */  
/*==========================*/
jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
    },4000);
});



/*==========================*/  
/* sidebar */  
/*==========================*/
$('.nav-icon').on('click', function() {
    $('body').toggleClass('show-menu');
});

$('.overlay').on('click', function () {
  $('body').removeClass('show-menu');
});


/*==========================*/  
/* Header fix */  
/*==========================*/
var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
  
}); 

  
 

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});


   
 
