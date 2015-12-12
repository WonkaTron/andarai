function calculateRoute(from, to) {
    var directionsService = new google.maps.DirectionsService();
    var directionsRequest = {
        origin: from,
        destination: to,
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        //waypoints: way_pts,
        provideRouteAlternatives: true
    };
    directionsService.route(
        directionsRequest,
        function(response, status)
        {
            for (var i = 0, len = response.routes.length; i < len; i++)
            {
                if (status == google.maps.DirectionsStatus.OK)
                {
                    new google.maps.DirectionsRenderer({
                        map: map,  // global object set at 'render_map.js' file
                        directions: response,
                        routeIndex: i
                    });
                }
                else
                    $("#error").append("Unable to retrieve your route<br />");
            }
        });
}

$(document).ready(function () {
    $("#calculate-route").submit(function(event) {
        event.preventDefault();
        calculateRoute($("#from").val(), $("#to").val());
    });
});