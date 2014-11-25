var athinoramaControllers = angular.module('athinoramaControllers', []);

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
        console.log($scope.hotel);
    });

}]);