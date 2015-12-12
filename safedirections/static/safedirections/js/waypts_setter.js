// global variables
//var way_pts = [];
var gcircle;

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map  // global object set at 'render_map.js' file
    });
    //way_pts.push({
    //    location: marker.position,
    //    stopover: true
    //});
    var infowindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + location.lat() +
        '<br>Longitude: ' + location.lng()
    });
    infowindow.open(map, marker);
}

function placeCircle(location, id){

    var circle = new google.maps.Circle({
        center: location,
        map: map,
        radius: 500,
        fillColor: '#FF6600',
        fillOpacity: 0.3,
        strokeColor: "#FFF",
        strokeWeight: 0,
        id: id
    });

	google.maps.event.addListener(circle, 'click', function(event) {
        gcircle = circle;
        $("#dangerModal").modal("show");
    });
}

