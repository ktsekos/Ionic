angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff', address: 'Tepeleniou 3' },
    { id: 1, name: 'G.I. Joe', address: 'Kyprou 21' },
    { id: 2, name: 'Miss Frizzle', address: 'Megistis 1' },
    { id: 3, name: 'Ash Ketchum', address: 'Parthenwnos 3 & Sofokleous' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  };
});
