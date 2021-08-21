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