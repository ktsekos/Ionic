angular.module('starter.hotels_services', [])
/**
* A simple example service that returns some data.
*/
.factory('Hotels', function() {
    var hotels = (function () {
        $.ajax({
            async: false,
            'global': false,
            'dataType': "text",
            url: "http://feeds.athinorama.gr/AlphaGuide.asmx/HotelList?AreaID=270&DestinationID=475&ShowAll=0",
            success: function (data) {
                str = data;
                str = str.substring(76, str.length -9);
                hotels = JSON.parse(str);
            },
            error: function(){
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