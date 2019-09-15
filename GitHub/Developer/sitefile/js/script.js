


var $btnDown = $(".buttonn");

$btnDown.on("click", function(){
	
	$("html,body").animate({scrollTop:0},900)
});


$('.about__item').addClass('lol')

$('#about__all').css('color','#222');

$('.about').css({'margin-bottom': '80px'});



$('.blog__textt').css('color', 'green');



$('.blog__h1').click(function() {
	$('.blog__textt').slideToggle(800);
});

$('.info__title').click(function() {
	$('.info__text').slideToggle(800);
})




$('.header__nav1').on('click', function() {
  $('html,body').animate({scrollTop:$('.header').offset().top+"px"},{duration:1E3});
});

$('.header__nav2').on('click', function() {
  $('html,body').animate({scrollTop:$('.Agency').offset().top+"px"},{duration:1E3});
});

$('.header__nav3').on('click', function() {
  $('html,body').animate({scrollTop:$('.about').offset().top+"px"},{duration:1E3});
});

$('.header__nav4').on('click', function() {
  $('html,body').animate({scrollTop:$('.blog').offset().top+"px"},{duration:1E3});
});

$('.header__nav5').on('click', function() {
  $('html,body').animate({scrollTop:$('.comments').offset().top+"px"},{duration:1E3});
});

$('.header__nav6').on('click', function() {
  $('html,body').animate({scrollTop:$('.Responsive').offset().top+"px"},{duration:1E3});
});


 

