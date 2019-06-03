'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$('.team__slider').slick({
			
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
			{
				breakpoint: 995,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: false,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
			]
		});

		$('.note__icon1').click(function() {
			this.parentElement.classList.toggle('contact__note1--active');
		});
		$('.note__icon2').click(function() {
			this.parentElement.classList.toggle('contact__note2--active');	
		});
	

		window.onscroll = function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		var headerHeight = $('.header').height();
 		
 		if (scrolled > headerHeight) {
 			$('.header__scroll').addClass('header__scroll--fixed');
 		} else {
 			$('.header__scroll').removeClass('header__scroll--fixed');
 		}
}



		var coords, map, marker;

		coords = {lat: 50.442408, lng: 30.519655};

		map = new google.maps.Map(
			document.getElementById('map'), {
				zoom: 16,
				center: coords,
				gestureHandling: 'cooperative'
			});

		marker = new google.maps.Marker({
			position: coords,
			map: map,
			icon: 'images/map-marker.png',
			draggable: true
		});
	});
})(jQuery);
