
      //Location content
      var lc;
      //PhoneGap Ready variable
      var pgr = false;

      function onBodyLoad() {
        //During testing, Let me know we got this far
        alert("onBodyLoad");
        //Add the PhoneGap deviceready event listener
        document.addEventListener("deviceready", onDeviceReady, false);
      }

      function onDeviceReady() {
        //During testing, Let me know PhoneGap actually
        // initialized
        alert("onDeviceReady");
        //Get a handle we'll use to adjust the accelerometer
        //content
        lc = document.getElementById("locationInfo");
        //Set the variable that lets other parts of the program
        //know that PhoneGap is initialized
        pgr = true;
      }

      function getLocation() {
        alert("getLocation");
        if(pgr == true) {
          var locOptions = {
            timeout : 5000,
            enableHighAccuracy : true
          };
          //get the current location
          navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError, locOptions);
          //Clear the current location while we wait for a reading
          lc.innerHTML = "Reading location...";

        } else {
          alert("Please wait,\nPhoneGap is not ready.");
        }
      }

      function onLocationSuccess(loc) {
        alert("onLocationSuccess");
        //We received something from the API, so first get the
        // timestamp in a date object so we can work with it
        var d = new Date(loc.timestamp);
        //Then replace the page's content with the current
        // location retrieved from the API
        lc.innerHTML = '<b>Current Location</b><hr /><b>Latitude</b>: ' + loc.coords.latitude + '<br /><b>Longitude</b>: ' + loc.coords.longitude + '<br /><b>Altitude</b>: ' + loc.coords.altitude + '<br /><b>Accuracy</b>: ' + loc.coords.accuracy + '<br /><b>Altitude Accuracy</b>: ' + loc.coords.altitudeAccuracy + '<br /><b>Heading</b>: ' + loc.coords.heading + '<br /><b>Speed</b>: ' + loc.coords.speed + '<br /><b>Timestamp</b>: ' + d.toLocaleString();
      }

      function onLocationError(e) {
        alert("Geolocation error: #" + e.code + "\n" + e.message);
      }
