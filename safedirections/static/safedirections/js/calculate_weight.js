var RouteWeight = function(overview_path, danger_points){
    var radius = 500;
    var count = 0;
    for(var i = 0; i < overview_path.length - 1; i++){
        var latlng_a = [overview_path[i].lat(), overview_path[i].lng()];
        var latlng_b = [overview_path[i+1].lat(), overview_path[i+1].lng()];

        for(var j = 0; j < danger_points.length; j++){
            var latlng_center = [danger_points[j].latlng.lat, danger_points[j].latlng.lng];
            if(straightPassInCircle(latlng_a,latlng_b,latlng_center,radius)){
                count++;
            }
        }
    }

    return count;
}
