var athinorama = angular.module('athinorama', ['ngRoute', 'athinoramaControllers']);

athinorama.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/',{
                templateUrl: 'views/home.html'
            }).
            when('/hotels', {
                templateUrl: 'views/hotel-list.html',
                controller: 'HotelListCtrl'
            }).
            when('/hotels/:hotelId', {
                templateUrl: 'views/hotel-detail.html',
                controller: 'HotelDetailCtrl'
            }).
            when('/hotels/map/:hotelId', {
                templateUrl: 'views/hotel-map.html',
                controller: 'HotelMapCtrl'
            }).
            when('/favorites', {
                templateUrl: 'views/favorites.html',
                controller: 'FavoritesCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
