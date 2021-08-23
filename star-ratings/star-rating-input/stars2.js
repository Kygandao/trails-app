//submit button
// const apiKey = '9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148';
const searchBtn = document.getElementById('searchBtn');


const trailName = document.getElementById('trailName');
const mainEl = document.getElementById('main')

const setTrailImage = (imgEl) => {

}

// function getTrail(event) {
//     event.preventDefault();
    // const citySearch = document.getElementById('citySearch').value;
    $.get({
        url: 'https://trailapi-trailapi.p.rapidapi.com/trails/map/12/gpx/',
        headers: {
            'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
            'x-rapidapi-key': '9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148'
        }

    }).then(function(showTrail) {
        console.log (showTrail)
    })
//         const trailContainer = document.getElementById ('trailContainer')
//         trailContainer.innerHTML = '';
//         for (let i = 0; i < showTrail.length; i++)


// searchBtn.click(function (event) {
//     event.preventDefault()
//     getTrail(event)
// })
// console.log(getTrail)
// })
// }

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

// -------------- Fetches the API data based on user's query search --------------

function getAPI(trailSearch) {
    fetch(`'https://trailapi-trailapi.p.rapidapi.com/trails/map/12/gpx/'
    
    
    https://www.googleapis.com/books/v1/volumes?q=${trailSearch}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            handleData(data);
        });
};

// -------------- Event listener input's user's query into the API fetch function --------------

submitBtn.addEventListener('click', handleClick);

function handleClick() {
    const userQuery = searchInputEl.value;
    getAPI(userQuery);
};



// //function to get geocode
// function geoLocationCode(event){
//     event.preventDefault();
//     var location = document.getElementById('locationInput').value;   //gets the value from input field
//     $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyD5z7ZEbyLXIBHSPMaAIwoCr1CGsCjO1g8`)
//     .then(function(response){
//         console.log(response);
       
//             var results = response.results;
//             return results[0].geometry.location;
        
     
//     })
//     .then(trailInfo)  
    
//     .catch(function(error){
//         window.alert("Please enter the zipcode or the city for your search!");
//     })

// }
// }