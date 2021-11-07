$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        centerMode: true,
        slidesToShow: 1,
        /* adaptiveHeight: true, */
        prevArrow: '<button type = "button" class = "slick-prev"><img src="icons/right.png"></button>',
        nextArrow:  '<button type = "button" class = "slick-next"><img src="icons/left.png"></button>',
        dotsClass: 'slick-dots',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true
              }
            },
          ]  
    });
  });

