

$(document).ready(function(){
    //google.maps.event.addDomListener(window, 'load', initialize);
    initialize();
    geoLocatingInit();

    $("#calculate-route").submit(function(event) {
        event.preventDefault();
        calculateRoute($("#from").val(), $("#to").val());
    });

    carregaMarkers();

});
