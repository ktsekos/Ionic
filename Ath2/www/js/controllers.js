var athinoramaControllers = angular.module('athinoramaControllers', ['ngMap']);

athinoramaControllers.controller('HotelListCtrl',['$scope', '$http', function ($scope, $http){

    $http.get('http://feeds.athinorama.gr/AlphaGuide.asmx/RestaurantListLight?AreaID=269&DestinationID=0&ShowAll=0').success(function(data) {
        console.log('all good');
        str = data;
        str = str.substring(76, str.length -9);
        $scope.hotels = JSON.parse(str);
    });

    $scope.ordering ="GrName";

}]);

athinoramaControllers.controller('HotelDetailCtrl',['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http){

    $http.get('http://feeds.athinorama.gr/AlphaGuide.asmx/RestaurantDetails?RID=' + $routeParams.hotelId ).success(function(data) {
        console.log ('hotel good');
        str = data;
        str = str.substring(77, str.length -10);
        $scope.hotel = JSON.parse(str);
    });

}]);

athinoramaControllers.controller('HotelMapCtrl',['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http){
    var map;
    $http.get('http://feeds.athinorama.gr/AlphaGuide.asmx/RestaurantDetails?RID=' + $routeParams.hotelId ).success(function(data) {

        console.log('map good');
        str = data;
        str = str.substring(77, str.length - 10);
        $scope.hotel = JSON.parse(str);
        $scope.hotel.Longitude = $scope.hotel.Longitude.replace(",", ".");
        $scope.hotel.Latitude = $scope.hotel.Latitude.replace(",", ".");
        $scope.hotel.Longitude = parseFloat($scope.hotel.Longitude);
        $scope.hotel.Latitude = parseFloat($scope.hotel.Latitude);
        var hotelLatlng = new google.maps.LatLng($scope.hotel.Latitude, $scope.hotel.Longitude);

        if (navigator.geolocation) { //Checks if browser supports geolocation
            navigator.geolocation.getCurrentPosition(function (position) {
                var mylatitude = position.coords.latitude;
                var mylongitude = position.coords.longitude;
                var myLatlng = new google.maps.LatLng(mylatitude, mylongitude);
                var directionsService = new google.maps.DirectionsService();
                var directionsDisplay = new google.maps.DirectionsRenderer();
                var mapOptions = //Sets map options
                {
                    zoom: 15,
                    center: myLatlng, //zoom in on users location
                    mapTypeControl: true, //allows you to select map type eg. map or satellite
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.SMALL //sets map controls size eg. zoom
                    },
                    mapTypeId: google.maps.MapTypeId.ROADMAP //sets type of map Options:ROADMAP, SATELLITE, HYBRID, TERRAIN
                };
                map = new google.maps.Map( document.getElementById("map-canvas"), mapOptions );
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById('panel'));
                var request = {
                    origin: myLatlng,
                    destination: hotelLatlng,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            });

        }else{
            var mapOptions = {
                zoom: 16,
                zoomControl: false,
                center: hotelLatlng
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hotel position'
            });
        }

    });

}]);



