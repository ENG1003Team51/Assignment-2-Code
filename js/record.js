function initMap() {
	getLocationUpdate();
  var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 17
  });
 

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

     map.setCenter(pos);
	
var  currentPositionMarker = new google.maps.Marker({
                map: map,
                position: {lat: pos.lat, lng:pos.lng},
icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 4
    },                
title: "Current Position"
            });


    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

var watchID;
         var geoLoc;
         
         function showLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var  currentPositionMarker = new google.maps.Marker({
                map: map,
                position: {lat: latitude, lng: longitude},
icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 1
    },                
title: "Current Position"
            });
         }
         
         function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            }
            
            else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
         }
         
         function getLocationUpdate(){
            if(navigator.geolocation){
               // timeout at 60000 milliseconds (60 seconds)
               var options = {timeout:60000};
               geoLoc = navigator.geolocation;
               watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
            }
            
            else{
               alert("Sorry, browser does not support geolocation!");
            }
         }

}

         