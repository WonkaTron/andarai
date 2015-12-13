// global variables
var map;
var actual_latlng;
var danger_points = [];

function initialize() {
	var mapCanvas = document.getElementById('map');
    var mapOptions = {
		center: new google.maps.LatLng(-22.911612, -43.200770),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDoubleClickZoom: true
	};
    map = new google.maps.Map(mapCanvas, mapOptions);

	// event listener to call placeMarker function implemented at 'waypts_setter.js' file
	google.maps.event.addListener(map, 'dblclick', function(event) {
        actual_latlng = event.latLng;
        placeMarker(actual_latlng);
		//create(event.latLng);
        crup = create;
        flag = "create";
        $("#dangerModal").modal("show");
    });
}

function carregaMarkers(){
	$.get("/api/")
        .done(function(data){
            console.log("get com sucesso", data);
            danger_points = data;
			data.forEach(function(element, index, list){
                var location = new google.maps.LatLng(element.latlng.lat, element.latlng.lng);
				placeCircle(location,element.id);
			});
    }).fail(function(){
        console.log("falhou");
    });
}
