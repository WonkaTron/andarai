var routes = [];
var directions_renderers = [];

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
            response.routes.forEach(function(elem, i) {
                $("#waypoints").append("<option value=" + i + ">" + elem.summary + "</option>");
            });

            var gradient = new Rainbow();
            gradient.setSpectrum('#00ff00', '#ff0000');
            gradient.setNumberRange(1, 20);

            for (var i = 0, len = response.routes.length; i < len; i++)
            {
                routes = response.routes;
                if (status == google.maps.DirectionsStatus.OK)
                {
                    var new_grade = RouteWeight(routes[i].overview_path, danger_points);
                    var grad_index = Math.round(20 * new_grade / 3);
                    var new_color = gradient.colourAt(grad_index);
                    //console.log("grad_index", grad_index);
                    //console.log("new_color", new_color);
                    directions_renderers.push(new google.maps.DirectionsRenderer({
                        map: map,  // global object set at 'render_map.js' file
                        directions: response,
                        routeIndex: i,
                        polylineOptions: {
                            strokeColor: "#" + new_color
                        }
                    }));
                }
                else
                    $("#error").append("Unable to retrieve your route<br />");
            }
        });
}

