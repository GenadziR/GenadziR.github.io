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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    /* $('.catalog-item__link').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass("catalog-item__content_active");
        $('.catalog-item__list').eq(i).toggleClass("catalog-item__list_active");
      })
    })

    $('.catalog-item__back').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass("catalog-item__content_active");
        $('.catalog-item__list').eq(i).toggleClass("catalog-item__list_active");
      })
    }) */

    function toggleSlide (item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass("catalog-item__content_active");
          $('.catalog-item__list').eq(i).toggleClass("catalog-item__list_active");
        })
      }); 
    };

    toggleSlide ('.catalog-item__link');
    toggleSlide ('.catalog-item__back');

    // modals windows
    $('[data-modal=consultation]').on('click', function(){
      $('.overlay , #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function(){
      $('.overlay , #consultation , #thanks , #drder').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay , #order').fadeIn('slow');
      });
    });

    function validateForms (form) {
      $(form).validate ({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Введите Ваше имя",
          phone: "Укажите Ваш номер телефона",
          email: {
            required: "Вы не указали ваш email",
            email: "Ваш email должен быть в формате name@domain.com"
          }
        }
      })
    };
    validateForms ('#consultation form');
    validateForms ('#consultation-form');
    validateForms ('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e){ // обращаемся ко всем формам, submit  подтверждение отправки
      e.preventDefault(); // отменяет стандартное поведение браузера
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function(){
        $(this).find ("input").val ("");

        $('form').trigger ('reset');
      });
      return false;
    });
});

