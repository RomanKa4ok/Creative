'use strict';

(function($){
	$(document).ready(function() {
		// Code
		$('.team__slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3
		});
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
