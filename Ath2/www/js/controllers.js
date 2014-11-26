var athinoramaControllers = angular.module('athinoramaControllers', ['ngMap']);

athinoramaControllers.controller('HotelListCtrl',['$scope', '$http', function ($scope, $http){

    $http.get('http://feeds.athinorama.gr/AlphaGuide.asmx/RestaurantListLight?AreaID=0&DestinationID=0&ShowAll=1').success(function(data) {
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

    $http.get('http://feeds.athinorama.gr/AlphaGuide.asmx/RestaurantDetails?RID=' + $routeParams.hotelId ).success(function(data) {
        console.log ('map good');
        str = data;
        str = str.substring(77, str.length -10);
        $scope.hotel = JSON.parse(str);
        $scope.hotel.Longitude = $scope.hotel.Longitude.replace(",", ".");
        $scope.hotel.Latitude = $scope.hotel.Latitude.replace(",", ".");
        $scope.hotel.Longitude = parseFloat($scope.hotel.Longitude);
        $scope.hotel.Latitude = parseFloat($scope.hotel.Latitude);

        var myLatlng = new google.maps.LatLng($scope.hotel.Latitude,$scope.hotel.Longitude);
        var mapOptions = {
            zoom: 10,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var name = $scope.hotel.GrName;
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: name
        });
    });


}]);