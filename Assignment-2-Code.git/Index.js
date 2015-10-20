<!DOCTYPE html>
<html>
  <head>
    <title>Geolocation</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #map {
        height: 100%;
      }
	  #floating-panel {
  position: absolute;
  top: 10px;
  left: 25%;
  z-index: 5;
  background-color: #fff;
  padding: 5px;
  border: 1px solid #999;
  text-align: center;
  font-family: 'Roboto','sans-serif';
  line-height: 30px;
  padding-left: 10px;
}
    </style>
  </head>
  <body>
  <div id="floating-panel">
    <b>Mode of Travel: </b>
      <select id="mode">
      <option value="DRIVING">Driving</option>
      <option value="WALKING">Walking</option>
      <option value="BICYCLING">Bicycling</option>
      <option value="TRANSIT">Transit</option>
    </select>
    </div>
    <div id="map"></div>
    <script>
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
function Index(){
var self = this;
var this.map = map;
 
	//self.latitude = null;
   //self.longitude = null;  
function initMap() {
	/*
var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
var myOptions = {
   zoom: 14,    
   center: latlng,  
   mapTypeId: google.maps.MapTypeId.ROADMAP 
};
var map = new google.maps.Map(document.getElementById("map"), myOptions);
	*/
   this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: this.map});
/*
function success(position) 
		{
			myLocation = new location (position.coords.latitude, position.coords.longitude, position.coords.accuracy);
			self.latitude = position.coords.latitude;
			self.longitude = position.coords.longitude;
			self.accuracy = position.coords.accuracy;
		}
   function location(latitude,longitude,accuracy)
	{
		this.latitude = latitude;
		this.longitude = longitude;
		this.accuracy = accuracy;
		this.time = new Date();
	}

if (navigator.geolocation) {
  	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  	var marker = new google.maps.Marker({
                        position: latlng,    
                        map: map 
                    });
}else{ alert("Cant support")
	
}
*/
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
  	//navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      this.map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, this.map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, this.map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
function travelMode() {
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  
  directionsDisplay.setMap(this.map);

  calculateAndDisplayRoute(directionsService, directionsDisplay);
  document.getElementById('mode').addEventListener('change', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var selectedMode = document.getElementById('mode').value;
  directionsService.route({
    origin: {lat: 37.77, lng: -122.447},  // Haight.
    destination: {lat: 37.768, lng: -122.511},  // Ocean Beach.
    // Note that Javascript allows us to access the constant
    // using square brackets and a string value as its
    // "property."
    travelMode: google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
/*
	function route(input)
	{
		this.date = new Date();
		myRoute.locations.push(input);
		myRoute.dateCreated = this.date;
		return myRoute;
	}
	var marker = new google.maps.Marker({
                        position: latlng,    
                        map: map 
                    });
	*/
}
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCTHiCb_5dRDu5TMFegL74hQKYjAAPsBHI&signed_in=true&callback=initMap"
        async defer>
    </script>
  </body>
</html>
