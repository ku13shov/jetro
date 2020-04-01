$(function(){
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev" type="button" class="slick-prev"><img src="images/slider/previous.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next" type="button" class="slick-prev"><img src="images/slider/next.png" alt=""></button>',
    fade: true,
    autoplay: true,
    asNavFor: '.slider__inner-nav',
  });
  $('.slider__inner-nav').slick({
    slidesToShow: 6,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    asNavFor: '.slider__inner',
    responsive: [
      {
        breakpoint: 971,
        settings: {
          slidesToShow: 5,
          
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 4,
          
        }
      },
      {
        breakpoint: 631,
        settings: {
          slidesToShow: 3,
          
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          
        }
      },
    ]
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu ul').slideToggle();
  });
  
});
