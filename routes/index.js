mapboxgl.accessToken = 'pk.eyJ1IjoiY2VkYXJoYWx2b3Jzb24iLCJhIjoiY2tzZHY1anlsMHVkcTJ0bzI0NzU1Z2FmMCJ9.5523rDcsb_V3eRU7jnW_rw';

navigator.geolocation.getCurrentPosition(locationReceved, locationNotReceved, {
    enableHighAccuracy: true,
})

function locationReceved(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}



function setupMap(center) {
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
        })


const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

let directions = new mapboxDirections({
    accessToken: mapboxgl.AccessToken
})

map.addControl(directions, "top-left")
}






























































// if (window.navigator.geolocation) {
//     // Geolocation available
//    } 

//    window.navigator.geolocation
//   .getCurrentPosition(console.log, console.log);


//   getCurrentPosition(successCallback, failureCallback);


//   const userLocation = (position) => {
//       const {latitude, longitude} = position.coords;
//       fetch(`${latitude} ${longitude}`)
//        .then((response) = response.json())
//        .then (console.log);



//   }



























// const express = require('express');
// const router = express.Router();

// //ROUTES
// const apiRoutes = require('./apiRoutes');

// router.use('/api', apiRoutes);

// module.exports = router;

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken = 'pk.eyJ1IjoiamFzYWxhc2hlcm5hbmRleiIsImEiOiJja3NjMWhhbTIwY2d2MndwYXd3a29mcmZ1In0.JK66X8fmu8O4BbgPboI-Jw';
// var map = new mapboxgl.Map({
//   container: 'YOUR_CONTAINER_ELEMENT_ID',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });












