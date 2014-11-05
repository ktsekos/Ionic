angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Restaurants', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var restaurants = [
    { id: 0, name: 'Tortuga Food Bar', address: 'Tepeleniou 3' },
    { id: 1, name: 'F+W', address: 'Kyprou 21' },
    { id: 2, name: 'Vyzantino', address: 'Megistis 1' },
    { id: 3, name: 'Buba', address: 'Parthenwnos 3 & Sofokleous' },
    { id: 4, name: 'La Suite Lounge', address: 'Parthenwnos 3 & Sofokleous' },
    { id: 5, name: 'Old Ithaki', address: 'Parthenwnos 3 & Sofokleous' }
  ];

  return {
    all: function() {
      return restaurants;
    },
    get: function(restaurantId) {
      // Simple index lookup
      return restaurants[restaurantId];
    }
  };
});
