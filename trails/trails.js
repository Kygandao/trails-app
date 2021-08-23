// const {response} = require ("express")

// const lat = document.getElementById("lat").value;
// const lon = document.getElementById("long").value;
// const country = document.getElementById("country").value;
// const state = document.getElementById("state").value;
const city = document.getElementById("cityInput")
// const citySearch = document.getElementById('citySearch')
const searchBtn = document.getElementById('searchBtn');
const trailItem = document.getElementById('trailItem');
const trailList = document.getElementById('trailList');
const trailInfo = document.getElementById('trail-info');
const form = document.getElementById('searchForm');

//get trails by location

const fetchTrails = async (cityInput) => {
  try {
    const res = await fetch(
      `https://trailapi-trailapi.p.rapidapi.com/?&q-=${cityInput}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "9c53f48bb7mshe71996a9d24cb5ap150945jsna9bb19aed148",
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
    console.log('Success!' + err);
  }
};

fetchTrails();

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

fetchTrails('Fetch Trails Works!');

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





// -------------- Fetches the API data based on user's query search --------------

function getAPI(city) {
  fetch(`'https://trailapi-trailapi.p.rapidapi.com/?&q-city_cont=${city}'`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      handleData(data);
    });
    console.log('This works!')
};

getAPI();

// -------------- Event listener input's user's query into the API fetch function --------------

searchBtn.addEventListener('click', handleClick);

function handleClick() {
  const userQuery = city.value;
  getAPI(userQuery);
};

// --------------- Handles user's click selection ---------------
// (Function recieves the <td> target tag, identifies the <tr> parent element and then selects the first 3 objects of the parent element array to generate the items being placed in personal library list)

function handleClickSelection(event) {
  const el = event.target;
  if (el.tagName === 'TD') {
      const trailEl = el.parentElement;
      const trailInfo = {
          title: trailEl.children[0].innerText,
          author: trailEl.children[1].innerText,
          genre: trailEl.children[2].innerText,
      };
      document.querySelector('#resultsBtn');
      console.log('trailInfo: ', trailInfo)
      alert('You added ' + trailInfo.title + ' to your library!');
      saveBook(trailInfo);
  };
}

handleClickSelection();
