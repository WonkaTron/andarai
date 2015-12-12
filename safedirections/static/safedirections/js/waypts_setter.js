// global variables
var way_pts = [];

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,  // global object set at 'render_map.js' file
    });
    way_pts.push({
        location: marker.position,
        stopover: true
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + location.lat() +
        '<br>Longitude: ' + location.lng()
    });
    infowindow.open(map, marker);
}