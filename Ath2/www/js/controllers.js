angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('HotelsCtrl', function($scope) {
})

.controller('SettingsCtrl', function($scope) {
});

