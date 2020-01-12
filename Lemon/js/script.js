'use strict'
$(function () {

    $('.cake__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true,
    });

    $('.recipees').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        vertical: false,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    vertical: true,
                }
            },
        ]
    });
    
    $('.hamburger').click(function() {
        $('.hamburger__menu').animate({
            right: '0px'
        }, 500);
        
        $('html').animate({
            right: '275px'
        }, 500);
    });
    
    $('.close__menu').click(function() {
        $('.hamburger__menu').animate({
            right: '-275px'
        }, 500);
        
        $('html').animate({
            right: '0px'
        }, 500);
    });
});



