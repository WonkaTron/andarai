var RouteWeight = function(overview_path, danger_points){
    var radius = 500;
    var count = 0;
    var danger = 0;
    for(var i = 0; i < overview_path.length; i++){
        var latlng = overview_path[i];

        for(var j = 0; j < danger_points.length; j++){
            var latlng_center = [danger_points[j].latlng.lat, danger_points[j].latlng.lng];
            var center = new google.maps.LatLng(latlng_center[0],latlng_center[1]);
            if(estahNaArea(latlng, center, radius)){
                count++;
                danger += danger_points[j].danger_level;
                console.log("somou",latlng,radius);
            }
        }
    }

    if(count == 0) {
        return 0;
    }
    else {
        return danger/(count);
    }
};
