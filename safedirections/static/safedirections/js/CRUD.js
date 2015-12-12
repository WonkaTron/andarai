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

function update(){
    valor = $("#dangerLevel").val();
    console.log(gcircle);

    data = {
        "latlng": JSON.stringify(gcircle.center),
        "danger_zero": 0,
        "danger_one": 0,
        "danger_two": 0,
        "danger_three":0
    };

    switch (valor){
        case "0":
            data['danger_zero'] = 1;
            break;
        case "1":
            data['danger_one'] = 1;
            break;
        case "2":
            data['danger_two'] = 1;
            break;
        case "3":
            data['danger_three'] = 1;
            break;
    }
    var url = '/api/' + gcircle.id + "/";

    $.ajax({
        url: url,
        method: "PUT",
        data: data
        }).done(function(data){
            console.log("postado com sucesso", data);
        }).fail(function(){
            console.log("falhou");
        });
}