/**
 * Created by Thales Nathan on 12/12/2015.
 */
var route_selector = function (index) {
    setAllNull();
    directions_renderers[index].setMap(map);
};

var setAllNull = function () {
    directions_renderers.forEach(function (elem, i) {
        elem.setMap(null);
    });
};