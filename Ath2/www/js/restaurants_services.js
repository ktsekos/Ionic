angular.module('starter.restaurants_services', [])
/**
* A simple example service that returns some data.
*/
.factory('Restaurants', function() {

    var restaurants = (function () {
        var restaurants = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "./data/RestaurantList.json",
            'dataType': "json",
            'success': function (data) {
                restaurants = data;
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