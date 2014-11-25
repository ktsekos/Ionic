var athinorama = angular.module('athinorama', ['ngRoute', 'athinoramaControllers']);

athinorama.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/hotels', {
                templateUrl: 'views/hotel-list.html',
                controller: 'HotelListCtrl'
            }).
            when('/hotels/:hotelId', {
                templateUrl: 'views/hotel-detail.html',
                controller: 'HotelDetailCtrl'
            }).
            otherwise({
                redirectTo: '/hotels'
            });
    }]);
