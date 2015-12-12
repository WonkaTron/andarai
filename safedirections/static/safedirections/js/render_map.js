// global variables
var map;

function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(-22.911612, -43.200770),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(mapCanvas, mapOptions);

	// event listener to call placeMarker function implemented at 'waypts_setter.js' file
	google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(event.latLng);
		create(event.latLng);

    });
}

$(document).ready(function () {
	google.maps.event.addDomListener(window, 'load', initialize);
});