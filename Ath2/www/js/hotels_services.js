angular.module('starter.hotels_services', [])
/**
* A simple example service that returns some data.
*/
.factory('Hotels', function() {
    var hotels = (function () {
        $.ajax({
            'async': false,
            'global': false,
            'dataType': "json",
            'url': "./data/HotelListAll.json",
            'success': function (data) {
                //console.log('all good');
                //str = data;
                //console.log(str);
                //str = str.substring(76, str.length -9);
                //hotels = JSON.parse(str);
                hotels=data;
            },
            'error': function(){
                console.log('failure');
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