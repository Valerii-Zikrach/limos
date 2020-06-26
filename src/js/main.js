$(function () {
	$('.intro-slider__inner').slick({
		infinite: true,
		dots: false,
		prevArrow: false,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.fleet__inner').slick({
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		slidesToScroll: 1
	});
	$('.testimonials__inner').slick({
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		slidesToScroll: 1
	});

	$('.header-btn').on('click', function () {
		$(this).toggleClass('active');
	});
	$('.header-btn').on('click', function () {
		$('.menu').slideToggle();
	});
	$('.header-btn').on('click', function () {
		$('.logo__img--red').toggleClass('active');
		$('.logo__img--white').toggleClass('active');
	});


	$('#contact-form__select').styler();

	new WOW().init();
});