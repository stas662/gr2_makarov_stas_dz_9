$(document).ready(function(){
    $('.reviews-slider').slick({
        asNavFor: '.reviews-text-slider',
        focusOnSelect: true,
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        autoplayspeed: 3000,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 991.98, // - от какой ширины изменять настройки(1024 и ниже)
          settings: {
            // вносим изменения на ширине 1024 и ниже 
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767.98, // брекпоинтов может быть сколько угодно
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});

$(document).ready(function(){
    $('.reviews-text-slider').slick({
        asNavFor: '.reviews-slider',
        arrows : false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});