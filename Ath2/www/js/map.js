$(document).ready(function(){
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, { maximumAge: 10000, timeout: 30000, enableHighAccuracy: true });


    function geolocationSuccess(position) {
        var myLat = position.coords.latitude;
        var myLong = position.coords.longitude;
        initializeMap(myLat, myLong);
    }

    function initializeMap(lat, long) {
        var myLatLng = new google.maps.LatLng(lat, long);
        var mapOptions = {
            zoom: 16,
            center: myLatLng
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'You are here!'
        });
    }

    function geolocationError() {
        $('#map-canvas').html('Sorry, your GPS is off');
    }
});