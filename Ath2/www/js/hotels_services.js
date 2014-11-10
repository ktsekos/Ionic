angular.module('starter.hotels_services', [])
/**
* A simple example service that returns some data.
*/
.factory('Hotels', function() {
// Might use a resource here that returns a JSON array
// Some fake testing data
var hotels = [
    { id: 0, name: 'Hilton', region: 'Attiki', address: 'Tepeleniou 3' },
    { id: 1, name: 'Grande Bretagne', region: 'Kriti', address: 'Kyprou 21' },
    { id: 2, name: 'Anna', region: 'Attiki', address: 'Megistis 1' },
    { id: 3, name: 'Buba', region: 'Dwdekanhsa', address: 'Axilleos 12' },
    { id: 4, name: 'La Suite Lounge', region: 'Kyklades', address: 'Poseidwnos 256' },
    { id: 5, name: 'Old Ithaki', region: 'Kyklades', address: 'Kerkyras 23' }
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