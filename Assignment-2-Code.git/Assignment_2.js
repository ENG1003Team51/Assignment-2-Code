<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      html, body { height: 100%; margin: 0; padding: 0; }
      #map { height: 100%; }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script type="text/javascript">
          
        //testing github changing this line - michael
        
        function mainMenu(){
            var map;
            var StopButton = false;
            var currentPosition;
            var distination;
            var menuStart = false;
            var menuLists = false;
            var clearButton = false;
            var lat = null;
            var lng = null;
            var travelStart = false;
            
            if(menuStart = true){
                initMap();
                setMarker();
                searchDistination();
                if(setMarker != 'undefine' || searchDistination != 'undefine')
                setInterval(startRecordRoute(),1000)
                
            }
            if(menuLists = true){
                Lists();
            }
        }
        
        
//Reference     https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -37.9120467, lng: 145.1343136},
                zoom: 17
            });
            
             var infoWindow = new google.maps.InfoWindow({map: map});

  
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
                });
            } else {
    // Browser doesn't support Geolocation
                handleLocationError(false, infoWindow, map.getCenter());
            }
        

            function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
            }
        }

/****************************************************************************************
                    ---------Start Recording Route--------
****************************************************************************************/       
        function startRecordRoute(){

            //getCurrentPosition!!!
            
            if(travelStart == true){
                
                travelModel();
            }
            
        }

/****************************************************************************************
                    ---------Stop Recording Route--------
****************************************************************************************/          
        
        function stopRecordRoute(){
            setTimeout
            saveRecordRoute();
        }

/****************************************************************************************
                    ---------Clear Recording Route--------
****************************************************************************************/          
        
        function deleteRecordRoute(){
            //JSON
        }

/****************************************************************************************
                    ---------Save Recording Route--------
****************************************************************************************/          
        
        function saveRecordRoute(){
            //JSON
        }
        
        function Lists(){
            if (deleteButton = true){
                deleteRecordRoute();
            }
        }
/****************************************************************************************
                    ---------Search Distination--------
****************************************************************************************/           
//Reference     https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple        
        function searchDistination(){
            initMap();
            var geocoder = new google.maps.Geocoder();
            
            document.getElementById('submit').addEventListener('click', function(){geocodeAddress(geocoder, map);});
            
            function geocodeAddress(geocoder, resultsMap) {
                var address = document.getElementById('address').value;
                    geocoder.geocode({'address': address}, function(results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            resultsMap.setCenter(results[0].geometry.location);
                            var marker = new google.maps.Marker({
                                map: resultsMap,
                                position: results[0].geometry.location
                            });
                        } else {
                            alert('Geocode was not successful for the following reason: ' + status);
                        }
                    });
                }
            
        }
               
/****************************************************************************************
                    ---------Travel model in directions--------
****************************************************************************************/            
//Reference     https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes
        function travelModel() {
            var directionsDisplay = new google.maps.DirectionsRenderer;
            var directionsService = new google.maps.DirectionsService;
            
            
            directionsDisplay.setMap(map);
            
            calculateAndDisplayRoute(directionsService, directionsDisplay);
            document.getElementById('mode').addEventListener('change', function() {
                calculateAndDisplayRoute(directionsService, directionsDisplay);
            });
            
            function calculateAndDisplayRoute(directionsService, directionsDisplay) {
                var selectedMode = document.getElementById('mode').value;
                    directionsService.route({
                        origin: {lat: 37.77, lng: -122.447},  // Haight.
                        destination: {lat: 37.768, lng: -122.511},  // Ocean Beach.****************** Need change!!!

                        travelMode: google.maps.TravelMode[selectedMode]
                        }, function(response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                        } else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
            }
            if(currentPosition == distination || StopButton == true){
                stopRecordRoute();
            }
        }
/****************************************************************************************
                    ---------Travel model in directions--------
****************************************************************************************/ 
        function setMarker(){
            var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var labelIndex = 0;

  // This event listener calls addMarker() when the map is clicked.
            google.maps.event.addListener(map, 'click', function(event) {
                addMarker(event.latLng, map);
            });

  // Add a marker at the center of the map.
            addMarker(bangalore, map);
            
            function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
                var marker = new google.maps.Marker({
                    position: location,
                    label: labels[labelIndex++ % labels.length],
                    map: map
                });
            }
            google.maps.event.addDomListener(window, 'load', initialize);
        }

// Adds a marker to the map.

        
        
    </script>
      
    <script async defer
  src="https://maps.googleapis.com/maps/api/js?v=3&amp;key=&amp;callback=initMap">
    </script>
  </body>
</html>






