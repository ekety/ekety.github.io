$(function () {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider__dots'
    });

    $('.slider__dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    vertical: true,
                }
            },
        ],
        asNavFor: '.header__slider',
    });

    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider__map',
        responsive: [
            {
                breakpoint: 1102,
                settings: {
                     slidesToShow: 3,
                }
            },
            
             {
                breakpoint: 900,
                settings: {
                     slidesToShow: 2,
                }
            },
            
             {
                breakpoint: 720,
                settings: {
                     slidesToShow: 1,
                }
            },
        ],
    });

    $('.slider__map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf__slider',
        focusOnSelect: true,
    });

    $('.holder__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
    });
    
    
    $('.shop__slider').slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider__map',
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });
    
    $('.surfboard__dots-circle').on('click', function() {
       $(this).toggleClass('active'); 
    });
    
    $('.menu__btn').on('click', function() {
       $('.menu').toggleClass('active'); 
    });
    
    
    new WOW().init();
    
});













