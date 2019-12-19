
$(function () {
	
	var $btnDown = $(".scroll__top");
	$btnDown.on("click", function () {
		$("html,body").animate({
			scrollTop: 0
		}, 900)
	});



	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
	});
	
});


$(function () {
		$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: ['<img src="img/prev.png" alt="">', '<img src="img/next.png" alt="">'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	
});