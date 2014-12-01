$(function() {

    <!--Swipe-->
    var prevSwipe="";
    $("#swipe-menu").swipe( {
        swipeDown:function(event, direction, distance, duration, fingerCount, fingerData) {
            if ( prevSwipe === "" || prevSwipe === "up" ){
                prevSwipe='down';
                $(this).animate({ "height": "+=150px", "opacity": "0.9"}, 1000).find('h1').html('Advanced search &uarr;');
            }
        },
        swipeUp:function(event, direction, distance, duration, fingerCount, fingerData) {
            if ( prevSwipe === "" || prevSwipe === "down" ){
                prevSwipe='up';
                $(this).animate({ "height": "-=150px", "opacity": "1"}, 1000 ).find('h1').html('Advanced search &darr;');
            }
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
    });

});