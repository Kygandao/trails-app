//submit button
const searchBtn = document.getElementById('searchBtn');
const citySearch = document.getElementById('citySearch')
const cityName = citySearch.value
    console.log(cityName)

//get trails by location
    function getTrail(lat, lon) {
        
    const requestUrl = `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${lat}&lon=${lon}`

    //api call
    fetch(requestUrl), {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
		"x-rapidapi-key": "9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148"
	}}   
.then(response => {
	console.log(response);
    return response.json();
})
.catch(err => {
	console.error(err);
})

.then((data) => { 
    const lat = data.lat
    const lon = data.lon
    // populateTrailResults(data);
    // function populateTrailResults (data) {
        data.trails.forEach ((trail) => {
            const trailEl = document.createElement('h1');
            trailEl.textContent = `${trail.name}`
            document.getElementById('trailList').appendChild(trailEl);
            const trailId = document.createElement('li');
            trailId.textContent = `${trail.id}`
            document.getElementById('trailList').appendChild(trailId);
            const trailLength = document.createElement('li');
            trailLength.textContent = `${trail.length}`
            document.getElementById('trailList').appendChild(trailLength);
            const trailDescription = document.createElement('li');
            trailDescription.textContent = `${trail.description}`
            document.getElementById('trailList').appendChild(trailDescription);
            const trailCity = document.createElement('li');
            trailCity.textContent = `${trail.city}`
            document.getElementById('trailList').appendChild(trailCity);        

        })
    }
// }
)

// function getGeoCoordinates() {
//     const cityName = citySearch.value
//     console.log(cityName)
// }
// fetch(requestUrl)
// .then(function(geoResponse) {
//     return geoResponse.json();
// })

// .then (trailData => {
//     if (trailData.length > 0) {
//         getTrail(trailData[1].lat, trailData[1].lon)
//     }
// })
// }

searchBtn.click(function (event) {
    event.preventDefault()
    getTrail(event)
})


//get stars from class
const clickedStar = document.querySelector('.stars')
const stars = document.querySelectorAll('.stars a');

//add event listener to stars and prevent user from rating more than once
stars.forEach((star, starIndex) => {
    star.addEventListener('click', () => {
        console.log(`star of index ${starIndex} was clicked`)
        clickedStar.classList.add('disabled')
        stars.forEach((starReview, otherStarIndex) => {
            if (otherStarIndex <= starIndex) {
                starReview.classList.add('active');
            }
        })
        console.log(`star of index ${starIndex + 1} was clicked`)
      
    })
}) 


// var axios = require("axios").default;
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2VkYXJoYWx2b3Jzb24iLCJhIjoiY2tzZHY1anlsMHVkcTJ0bzI0NzU1Z2FmMCJ9.5523rDcsb_V3eRU7jnW_rw';

// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true 
// });



// function successLong(position) {
//     console.log(position)
//     setupMap([position.coords.longitude])
// }


// function successLatatude(position) {
//     console.log(position)
//     setupMap([position.coords.latitude])
// }


// function setupMap(center) {
//     var options = {
//         method: 'GET',
//         url: 'https://trailapi-trailapi.p.rapidapi.com/trails/explore/',
//         params: {lon: ${}, lat: position.coords.latitude },
//         headers: {
//           'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
//           'x-rapidapi-key': '9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148'
//         }
//       };





    }

