// const {response} = require ("express")

// const lat = document.getElementById("lat").value;
// const lon = document.getElementById("long").value;
// const country = document.getElementById("country").value;
// const state = document.getElementById("state").value;
const city = document.getElementById("city")
// const citySearch = document.getElementById('citySearch')
const searchBtn = document.getElementById('searchBtn')
const trailItem = document.getElementById('trailItem')
const trailList = document.getElementById('trailList')
const trailInfo  = document.getElementById('trail-info')
const form = document.getElementById('searchForm');

//get trails by location
    
const fetchTrails = async (city) => {
    try {
        const res = await fetch(
        `https://trailapi-trailapi.p.rapidapi.com/?&q-city_cont=${city}&radius=25&q-activities_activity_type_name_eq=mountain-biking`,
        {
            method: "GET",
            headers: {
             "x-rapidapi-key": "9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148" ,
             "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
            },
        }
    );
    if (res.status >= 200 && res.status <= 299) {
     const trailJSON = await res.json();
    // console.log(trailJSON);
    return trailJSON;
  } else {
    throw new Error("Error fetching trails");
  }
} catch (err) {
    console.log(err);
        }
      };
      
const results = fetchTrails();  
results.then((data) => {
    // console.log(data);
    var data = data.places;
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      let trail = data[i];
      console.log(trail);
      let trailName = trail.name;
      let trailDescription = trail.description
      let trailDirections = trail.directions;   
            
      trailInfo.innerHTML = `<div class="trail-info">
      <h3>${trailName}</h3>
      <p>${trailDescription}</p>
      <p>${trailDirections}</p>
    </div>`;
  }
}); 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // const lat = document.getElementById("lat").value;
    // const lon = document.getElementById("long").value;
    // const country = document.getElementById("country").value;
    // const state = document.getElementById("state").value;
    const city = document.getElementById("citySearch").value;
    const results = fetchTrails(city);
    results.then((data) => {
      console.log(data);
      var data = data.places;
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let trail = data[i];
        console.log(trail);
        let trailName = trail.name;
        let trailDescription = trail.description;
        let trailDirections = trail.directions;
        
        trailInfo.innerHTML = `<div class="trail-info">
          <h3>${trailName}</h3>
          <p>${trailDescription}
          <p>${trailDirections}</p>
        </div>`;
      }
    });
  }
  );
                 





    