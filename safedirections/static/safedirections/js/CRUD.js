/**
 * Created by dantas on 12/12/15.
 */

function create(latLng){

    data = {
    "latlng": JSON.stringify(latLng),
    "danger_zero": null,
    "danger_one": null,
    "danger_two": null,
    "danger_three": 1
    };

    $.post("/api/", data)
        .done(function(data){
            console.log("postado com sucesso", data);

    }).fail(function(){
        console.log("falhou", data);

    });
}