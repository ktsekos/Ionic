angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('RestaurantsCtrl', function($scope, Restaurants) {
  $scope.restaurants = Restaurants.all();
})

.controller('RestaurantsDetailCtrl', function($scope, $stateParams, Restaurants) {
  $scope.restaurants = Restaurants.get($stateParams.restaurantId);
})

.controller('HotelsCtrl', function($scope) {
});
