$(document).ready(function(){


	// Slider_homepage-1

	$('.slideshow-container').slick({
		dots: true,
  		infinite: true,
  		speed: 500,
  		fade: true,
  		cssEase: 'linear'
	});
	

	// Sidebar-menu

	$('.title-menu').click(function (e) {
		e.preventDefault();
		var currentOption = $(this);
		
		var parentLi = currentOption.parent();

		parentLi.children('.touch-menu').slideToggle(350);

		if (parentLi.hasClass('active')) {
			parentLi.removeClass('active');
		} else {
			parentLi.addClass('active');
		}
	});


	// Slider_product_homepage-6

	$('.product-gallery').slick({
 		 slidesToShow: 1,
 		 slidesToScroll: 1,
 		 arrows: false,
 		 fade: true,
  		asNavFor: '.product-gallery-nav'
	});
	$('.product-gallery-nav').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
  		asNavFor: '.product-gallery',
  		dots: false,
  		centerMode: true,
 		focusOnSelect: true
	});


	// Mobile-catalog

	$('.title-catalog').click(function (e) {
		e.preventDefault();
		$('.touch-catalog').slideToggle(350);
	});
	

	// Mobile-filter

	$('.title-filter').click(function (e) {
		e.preventDefault();
		$('.touch-filter').slideToggle(350);	
	});
							
});