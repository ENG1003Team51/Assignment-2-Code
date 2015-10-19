function loadingList(){
    
    var routeList;
    var listHTML = "";
    var button = null;
    var routeKey = document.getElementById("RouteListsLocalStorage")
    button = document.getElementById("button");
    
    if(button == "true"){
        routeList = JSON.parse(localStorage.getItem(routeKey));
        listHTML += routeList.start + routeList.end + routeList.distance + routeList.time;
    }else{
        console.log("Loading Wrong !!!");
    }
    
    function initMap() {
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: routeList.start
        });
        directionsDisplay.setMap(map);

        calculateAndDisplayRoute(directionsService, directionsDisplay);
        document.getElementById('mode').addEventListener('change', function() {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
    }   

    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        var selectedMode = document.getElementById('mode').value;
        directionsService.route({
            origin: routeList.start,  // Haight.
            destination: routeList.end,  // Ocean Beach.
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

}