function mainMenu(){
    var map;
    var stopButton = false;
    var menuStart = true;
    var menuLists = false;
    var travelStart = true;
    var currentPosition;

    var lat = null;
    var lng = null;
    
    var distination;
    
    
    function initMap(){
        map = new google.maps.Map(document.getElementById('map'),{
            center: {lat: -37.9120467, lng: 145.1343136},
            zoom: 17
        });
        
        var infoWindow = new google.maps.InfoWindow({map: map});
        
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.corrds.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found.');
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            handleLocationError(false, infoWindow, map.getCenter());
        }
        
        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                    'Error: The Geolocation service failed.' : 
                    'Error: Your browser doesn\'t support geolocation.');
        }
    }

    

    function startRecord(){
        if (menuStart = true){
            initMap();
            
        }
    }

    function stopRecord(){
        
    }
    
    function saveRoute(){
        
    }
    
    function deleteRoute(){
        
    }
    
    function routeLists(){
        
    }
    
    
    function travelModel() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
            
        initMap();
        
        directionsDisplay.setMap(map);
            
        calculateAndDisplayRoute(directionsService, directionsDisplay);
        document.getElementById('mode').addEventListener('change', function() {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
            
        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
            var selectedMode = document.getElementById('mode').value;
            directionsService.route({
                origin: {lat: 37.77, lng: -122.447},  
                destination: {lat: 37.768, lng: -122.511},  // Destination should be change by user!!!

                travelMode: google.maps.TravelMode[selectedMode]
            }, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }

    }
       
}