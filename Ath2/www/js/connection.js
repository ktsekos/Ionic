// Call onDeviceReady when Cordova is loaded.
//
// At this point, the document has loaded but cordova-x.x.x.js has not.
// When Cordova is loaded and talking with the native device,
// it will call the event `deviceready`.
//
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

// Cordova is loaded and it is now safe to make calls Cordova methods
//
function onDeviceReady() {
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}
