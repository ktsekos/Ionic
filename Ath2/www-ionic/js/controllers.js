angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('RestaurantsCtrl', function($scope, Restaurants) {
    $scope.restaurants = Restaurants.all();
})

.controller('RestaurantDetailCtrl', function($scope, $stateParams, Restaurants) {
    $scope.restaurant = Restaurants.get($stateParams.restaurantId);
})

.controller('HotelsCtrl', function($scope, Hotels) {
    $scope.hotels = Hotels.all();
})

.controller('HotelDetailCtrl', function($scope, $stateParams, Hotels) {
    $scope.hotel = Hotels.get($stateParams.hotelId);
})

.controller('MapCtrl', function($scope) {
});

