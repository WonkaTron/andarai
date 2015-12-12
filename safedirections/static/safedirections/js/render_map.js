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

function carregaMarkers(){
	$.get("/api/")
        .done(function(data){
            console.log("get com sucesso", data);
			data.forEach(function(element, index, list){
				var location = new google.maps.LatLng(element.latlng.lat, element.latlng.lng);
				console.log("PORRA", location);
				placeMarker(location);
			});
    }).fail(function(){
        console.log("falhou");
    });
}
