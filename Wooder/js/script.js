$(function () {
    $('.header__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        centerMode: false,
        asNavFor: '.slider__dots',
    });

    $('.slider__dots').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.header__slider',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: false,
    });

    $('.header__hamburger-menu').on('click', function() {
        $('.menu').toggleClass('active');
    });
    
    new WOW().init();

});
