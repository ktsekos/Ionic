var athinoramaControllers = angular.module('athinoramaControllers', [ 'ngMap' ]);

athinoramaControllers.controller('HotelListCtrl',['$scope', '$http', function ($scope, $http){
    var inputsShown = false;
    $('#region-filter').change( function(){
        var areaId = $('#region-filter').val();
        $http.get('http://feeds.athinorama.gr/AlphaGuide.asmx/RestaurantListLight?AreaID='+areaId+'&DestinationID=0&ShowAll=0').success(function(data) {
            console.log('all good');
            str = data;
            str = str.substring(76, str.length -9);
            $scope.hotels = JSON.parse(str);
            $scope.areas=[];
            $.each($scope.hotels, function(index, value) {
                if ($.inArray(value.D_Description, $scope.areas) === -1) {
                   $scope.areas.push(value.D_Description);
                }
            });
            $('.row.search-filter, .row.ordering, .row.filtered-length, .row.area-filter').show();
        });
    });

    $scope.ordering ="GrName";

    <!--Swipe-->
    var prevSwipe="";
    $("#swipe-menu").swipe( {
        swipeDown:function(event, direction, distance, duration, fingerCount, fingerData) {
            if ( prevSwipe === "" || prevSwipe === "up" ){
                prevSwipe='down';
                $(this).animate({ "top": "+=150px", "opacity": "0.9"}, 1000).find('span').html('Advanced search &uarr;').parent().parent().find('#advanced-search').animate({ "height": "+=150px", "opacity": "0.9"}, 1000);
            }
        },
        swipeUp:function(event, direction, distance, duration, fingerCount, fingerData) {
            if ( prevSwipe === "" || prevSwipe === "down" ){
                prevSwipe='up';
                $(this).animate({ "top": "-=150px", "opacity": "1"}, 1000 ).find('span').html('Advanced search &darr;').parent().parent().find('#advanced-search').animate({ "height": "-=150px", "opacity": "1"}, 1000);
            }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
    });

}]);

athinoramaControllers.controller('HotelDetailCtrl',['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http){
    var map;
    $http.get('http://feeds.athinorama.gr/AlphaGuide.asmx/RestaurantDetails?RID=' + $routeParams.hotelId ).success(function(data) {
        console.log ('hotel good');
        str = data;
        str = str.substring(77, str.length -10);
        $scope.hotel = JSON.parse(str);
    });

    $('#add-to-favorites').click( function(){
        localStorage.setItem($routeParams.hotelId, JSON.stringify($scope.hotel));
    });

}]);

athinoramaControllers.controller('HotelMapCtrl',['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http){

    var map;
    $http.get('http://feeds.athinorama.gr/AlphaGuide.asmx/RestaurantDetails?RID=' + $routeParams.hotelId ).success(function(data) {

        console.log('map good');
        str = data;
        str = str.substring(77, str.length - 10);
        $scope.hotel = JSON.parse(str);
        console.log($scope.hotel);
        $scope.hotel.Longitude = $scope.hotel.Longitude.replace(",", ".");
        $scope.hotel.Latitude = $scope.hotel.Latitude.replace(",", ".");
        $scope.hotel.Longitude = parseFloat($scope.hotel.Longitude);
        $scope.hotel.Latitude = parseFloat($scope.hotel.Latitude);
        var hotelLatlng = new google.maps.LatLng($scope.hotel.Latitude, $scope.hotel.Longitude);
        var mapOptions = {
            map: map,
            zoom: 16,
            zoomControl: false,
            center: hotelLatlng
        };

        if (navigator.geolocation) { //Checks if browser supports geolocation
            navigator.geolocation.getCurrentPosition(function (position) {
                var mylatitude = position.coords.latitude;
                var mylongitude = position.coords.longitude;
                var myLatlng = new google.maps.LatLng(mylatitude, mylongitude);
                var directionsService = new google.maps.DirectionsService();
                var directionsDisplay = new google.maps.DirectionsRenderer();
                var mapOptions = //Sets map options
                {
                    zoom: 15,
                    center: myLatlng, //zoom in on users location
                    mapTypeControl: true, //allows you to select map type eg. map or satellite
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.SMALL //sets map controls size eg. zoom
                    },
                    mapTypeId: google.maps.MapTypeId.ROADMAP //sets type of map Options:ROADMAP, SATELLITE, HYBRID, TERRAIN
                };
                map = new google.maps.Map( document.getElementById("map-canvas"), mapOptions );
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById('panel'));
                var request = {
                    origin: myLatlng,
                    destination: hotelLatlng,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };

                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            });

        }

    });

}]);

athinoramaControllers.controller('FavoritesCtrl',['$scope', function ($scope){

    if(localStorage.length >0 ){
        $('#clear-favorites').show();
        for ( var i = 0 ; i < localStorage.length ; i++ ) {
            var fav = localStorage.getItem( localStorage.key( i ) );
            fav = JSON.parse(fav);
            $('#favorites-list').append(
                '<table cellspacing="0" cellpadding="0" border="0" width="100%" class="alphaguide-list-table detail-page">' +
                    '<tbody>' +
                        '<tr class="head">' +
                            '<td>' +
                                '<span class="title">'+fav.GrName+'</span>' +
                            '</td>' +
                            '<td style="text-align:right;"></td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td colspan="2" class="border-bot">' +
                                '<span class="category">'+fav.TCAT_GRDESCR+'</span>' +
                            '</td>' +
                        '</tr>' +
                    '</tbody>' +
                '</table>');
        }
    }else{
        $('#clear-favorites').hide();
        $('#favorites-list').html('No favorites');
    };

    $('#clear-favorites').click( function(){
        localStorage.clear();
        $('#favorites-list').html('No favorites');
        $('#clear-favorites').hide();
    });

}]);



