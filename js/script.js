$(document).ready(function(){
  
$(document).on('click', '.mobile-btn', openMobileMenu);

function openMobileMenu() {
  $('.mobile-btn').toggleClass('active');
  $('.nav-menu__list').toggleClass('active');
  if ($('.open').length) {
      if (!$(this).hasClass('open')) {
        $('.open li').slideToggle();
        $('.open').removeClass('open');
      }
    }
}

  $(".production,.work").owlCarousel({
   autoplayTimeout:4000,
   autoplay:true,
   loop:true,
   margin:10,
   responsiveClass:true,
   responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
     items:3,
     center: true
   }
 }
});
  $(".reviews").owlCarousel({
   autoplayTimeout:4000,
   autoplay:false,
   loop: true,
   dots: true,
   responsiveClass: true,
   responsive: {
    0: {
      items: 1
    },
    992: {
      items: 2
    },
    1400: {
      items: 3
    }
  }
});
  if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(window).on("resize", function() {
     if ($(window).width() > 991) {
      $('.header__main').addClass('header__main--desktop');

      $(window).scroll(function() {
       if ($(this).scrollTop() > 0){
        $('.header__main--desktop').addClass("header__main--active");
      } else {
        $('.header__main--desktop').removeClass("header__main--active");
      }
    });
    } else {
      $('.header__main').removeClass('header__main--desktop');
    }
  });
    $(window).trigger('resize');
  }

  $(".slider_slick").slick({
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '60px',
  slidesToShow: 5,
  arrows: true,
  responsive: [{
    breakpoint: 1200,
    settings: {
      arrows: false,
      dots: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 600,
    settings: {
      arrows: false,
      dots: true,
      fade: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
});

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $('.slick-slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });
  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
  $(visibleSlides).last().next().css('opacity', 0);
}

$(setSlideVisibility());

$('.slider_slick').on('beforeChange', function() {
  $('.slick-slide').each(function() {
    $(this).css('opacity', 1);
  });
});

$('.slider_slick').on('afterChange', function() {
  setSlideVisibility();
});


  $(".slider_slick_mehanizm").slick({
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '60px',
  slidesToShow: 7,
  arrows: true,
  responsive: [{
    breakpoint: 1200,
    settings: {
      arrows: false,
      dots: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 5
    }
  }, {
    breakpoint: 600,
    settings: {
      arrows: false,
      dots: true,
      fade: true,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
});

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $('.slick-slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });
  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
  $(visibleSlides).last().next().css('opacity', 0);
}

$(setSlideVisibility());

$('.slider_slick_mehanizm').on('beforeChange', function() {
  $('.slick-slide').each(function() {
    $(this).css('opacity', 1);
  });
});

$('.slider_slick_mehanizm').on('afterChange', function() {
  setSlideVisibility();
});

  $(".pro").owlCarousel({
   autoplayTimeout:6000,
   autoplay:true,
   loop: true,
   responsiveClass: true,
   items: 1
});

    $('.topmenu_item').click(function() {
    if ($('.open').length) {
      if (!$(this).hasClass('open')) {
        $('.open li').slideToggle();
        $('.open').removeClass('open');
      }
    }
    $(this).children().children('li').slideToggle();
    $(this).toggleClass('open');
  });

});