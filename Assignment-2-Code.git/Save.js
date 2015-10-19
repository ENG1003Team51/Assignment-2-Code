
function storeRouteLists(){

    var routeLists = null;
    routeLists = document.getElementById("route");


    var saveButton = null;
    saveButton = document.getElementById("saveButton");

    var routeKey = "RouteListsLocalStorage";

    
    if (saveButton == "true"){
        localStorage.setItem(routeKey, JSON.stringify(routeLists));
    }else{
        console.log("storeRouteLists() Wrong !!!")
    }
}

