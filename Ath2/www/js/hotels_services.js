angular.module('starter.hotels_services', [])
/**
* A simple example service that returns some data.
*/
.factory('Hotels', function() {
    
    var hotels = (function () {
        var hotels = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/HotelList.json",
            'dataType': "json",
            'success': function (data) {
                hotels = data;
            }
        });
        return hotels;
    })();

    return {
        all: function() {
            return hotels;            
        },
        get: function(hotelId) {
        // Simple index lookup
            var hotelId = hotelId.toString();

            var i = 0, hotelIndex = -1;
            while(hotels[i].REC_Id !== hotelId && i <= hotels.length){
               i++;
            }
            hotelIndex = i ;

            return hotels[hotelIndex];
        }
    };
});