$(function () {

	var $btnDown = $(".scroll__top");
	$btnDown.on("click", function () {
		$("html,body").animate({
			scrollTop: 0
		}, 900)
	});

	$('#kisnext-generation').click(function (e) {
		$(this).toggleClass("active");
		e.preventDefault();
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
