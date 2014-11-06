angular.module('starter.restaurants_services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Restaurants', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var restaurants = [
    { id: 0, name: 'Tortuga Food Bar', region: 'Kriti', address: 'Tepeleniou 3' },
    { id: 1, name: 'F+W', region: 'Attiki', address: 'Kyprou 21' },
    { id: 2, name: 'Vyzantino', region: 'Peloponnisos', address: 'Megistis 1' },
    { id: 3, name: 'Buba', region: 'Attiki', address: 'Parthenwnos 3 & Sofokleous' },
    { id: 4, name: 'La Suite Lounge', region: 'Peloponnisos', address: 'Kolonou 8' },
    { id: 5, name: 'Old Ithaki', region: 'Sporades', address: 'Alevizatou 81' }
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

