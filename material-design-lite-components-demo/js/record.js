var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -37.9120467, lng: 145.1343136},
    zoom: 17
  });
}

function doIt(){ //activated by button push..
    console.log("doIt() started");
}

function startRecord(){
	var mapMode = google.maps.DirectionTravelMode.DRIVING;
	var directionsDisplay = new google.maps.DirectionsRenderer();
	var directionService = new google.maps.DirectionsService();
	var directionsVisible = false;
	
	directionsDisplay.setMap(null);
	directionsDisplay.setMap(map);
	
	var points = [];
/*	
	google.maps.event.addListener(map,"click",function(Event){
		if(points.length == 0){
			if(confirm("Setting local postion become start point?")){
				point.push(Event.LatLng);
			}
		}else{
			if(point.length >= 2){
				point = []: google.maps.event.clearListeners(map,"click");
				return
			}
			if(confirm("Setting local postion become start point?")){
				point.push(Event.LatLng);
				var request = {
					origin: point[0],
					destination: point[1],
					travelMode: Mode,
					optimizeWaypoints: true,
					avoidHighways: false,
					avoidTolls: false
				};
				directionsService.route(request, function(response, status){
					if(status == google.maps.DirectionsStatus.OK){
						directionDisplay.setDirection(response);
						setTimeout(function(){directionDisplay.setMap(null)}, 8000)
					}
				});
			}
		}
	});
	directionsVisible = true;
}
*/
/*
	function setStart(){
		var newcenter = map.getCenter();
		if(!startPoint){
			startPoint = new google.maps.Marker({
				map: map,
				position: newcenter,
				draggable: true
			});
		}
	}
	function setEnd(){
		var newcenter = map.getCenter();
		if(!endPoint){
			endPoint = new google.maps.Marker(){
				map: map,
				position: newcenter,
				draggable: true
			}
		}
	}
	

	*/
}