$(document).ready(function(){
    initialize();
    geoLocatingInit();
    $("#calculate-route").submit(function(event) {
        event.preventDefault();
        calculateRoute($("#from").val(), $("#to").val());
    });

    carregaMarkers();

    routes.forEach(function(elem, i) {
        $("#waypoints").append("<option value=" + i + ">" + elem.summary + "</option>");
    });
    //google.maps.event.addDomListener(window, 'load', initialize);
});
