// Call onDeviceReady when Cordova is loaded.
//
// At this point, the document has loaded but cordova-x.x.x.js has not.
// When Cordova is loaded and talking with the native device,
// it will call the event `deviceready`.
//
function onLoad() {
    document.addEventListener("online", onOnline, false);
    document.addEventListener("offline", onOffline, false);
    document.addEventListener("deviceready", onDeviceReady, false);
}

// Cordova is loaded and it is now safe to make calls Cordova methods
//
function onDeviceReady() {
    checkConnection();
    alert('aaa');
    watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

// Handle the online event
//
function checkConnection() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
};
