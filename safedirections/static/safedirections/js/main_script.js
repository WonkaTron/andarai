$(document).ready(function(){
    window.scrollTo(0, 0);
    initialize();
    geoLocatingInit();
    $("#calculate-route").submit(function(event) {
        event.preventDefault();
        calculateRoute($("#from").val(), $("#to").val());
    });

    carregaMarkers();

    //google.maps.event.addDomListener(window, 'load', initialize);
});
