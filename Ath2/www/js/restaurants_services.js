angular.module('starter.restaurants_services', ['angularUtils.directives.dirPagination'])
/**
* A simple example service that returns some data.
*/
.factory('Restaurants', function() {

    var restaurants = (function () {
        var restaurants = null;
        $.ajax({
            async: false,
            cache: false,
            global: false,
            dataType: "text",
            url: "http://feeds.athinorama.gr/AlphaGuide.asmx/RestaurantList?AreaID=270&DestinationID=475&ShowAll=0",
            success: function (data) {
                str = data;
                str = str.substring(76, str.length -9);
                restaurants = JSON.parse(str);
            },
            error: function(){
                console.log('failure');
            }
        });
        return restaurants;
    })();
    
    return {
        all: function() {
            return restaurants;            
        },
        get: function(restaurantId) {
        // Simple index lookup
            var restaurantId = restaurantId.toString();
           
            var i = 0, restaurantIndex = -1;
            while(restaurants[i].REC_Id !== restaurantId && i <= restaurants.length){
               i++;
            }
            restaurantIndex = i ;
  
            return restaurants[restaurantIndex];
        }
    };
});