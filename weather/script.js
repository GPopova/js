var APPID = "",
    baseUrl = "http://api.openweathermap.org/data/2.5/forecast/",
    container = document.getElementById('container');

document.forms.weather.onsubmit = function(e) {
    e.preventDefault();
    sendRequest(this.elements.city.value);
};

function sendRequest(city) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", baseUrl + "?APPID=" + APPID
        + "&q=" + city + "&units=metric&lang=ua");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4)
            return;

        if (xhr.status == 200) {
            try {
                var data = JSON.parse(xhr.responseText);
                renderMap(data.city.coord);
            }
            catch(e) {
                console.log(e);
            }
        }
    };
}

function renderMap(coord) {
    var mapProp= {
        center:new google.maps.LatLng(coord.lat, coord.lon),
        zoom:7
    };
    var map = new google.maps.Map(document.getElementById("container"),mapProp);
    var marker = new google.maps.Marker({
        position: mapProp.center,
        animation: google.maps.Animation.BOUNCE
    });

    marker.setMap(map);
}