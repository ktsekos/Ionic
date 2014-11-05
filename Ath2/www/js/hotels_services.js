angular.module('starter.hotels_services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Hotels', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var hotels = [
    { id: 0, name: 'Hilton', address: 'Tepeleniou 3' },
    { id: 1, name: 'Grande Bretagne', address: 'Kyprou 21' },
    { id: 2, name: 'Anna', address: 'Megistis 1' },
    { id: 3, name: 'Buba', address: 'Parthenwnos 3 & Sofokleous' },
    { id: 4, name: 'La Suite Lounge', address: 'Parthenwnos 3 & Sofokleous' },
    { id: 5, name: 'Old Ithaki', address: 'Parthenwnos 3 & Sofokleous' }
  ];

  return {
    all: function() {
      return hotels;
    },
    get: function(hotelId) {
      // Simple index lookup
      return hotels[hotelId];
    }
  };
});

