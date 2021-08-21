
mapboxgl.accessToken = 'pk.eyJ1IjoiY2VkYXJoYWx2b3Jzb24iLCJhIjoiY2tzZHY1anlsMHVkcTJ0bzI0NzU1Z2FmMCJ9.5523rDcsb_V3eRU7jnW_rw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true 
});

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
setupMap([0.00, 0.00])
}

function setupMap(center) {
    let map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 12
    })
    map.addControl(new mapboxgl.NavigationControl());
    
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })
    map.addControl(directions, 'top-left');
}



// Here are the links and data needed for the html to make this work properly. dont forget to make a link to the index.js page 

// Example: <script src= index.js></script>

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset="utf-8">
// <title>Display map navigation controls</title>
// <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
// <link href="https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css" rel="stylesheet">
// <script src="https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.js"></script>
// <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.js"></script>
// <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css" type="text/css">
// <style>
// body { margin: 0; padding: 0; }
// #map { position: absolute; top: 0; bottom: 0; width: 100%; }
// </style>
// </head>
// <body>
// <div id='map' style='width: 800px; height: 700px;'></div>