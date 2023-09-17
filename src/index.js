let weather = {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    oslo: {
      temp: -5,
      humidity: 20
    }
  };

  function displayWeather(city) {
    city = city.toLowerCase();
    if (weather[city] !== undefined) {
      let temperature = weather[city].temp;
      let humidity = weather[city].humidity;
      let tempCelsius = Math.round(temperature);
      let tempFahrenheit = Math.round((temperature * 9) / 5 + 32);
  
      alert(
        `It is currently ${tempCelsius}°C (${tempFahrenheit}°F) in ${city} with a humidity of ${humidity}%.`
      );
    } else {
      alert(
        `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
      );
    }
  }
  
  // week 4 home work //
  function search(event) {
    event.preventDefault();
    let searchInput =  document.querySelector
    ("#search-text-input");
    
    let h2 = document.querySelector("h2");  
    h2.innerHTML = `${searchInput.value}`;
  }

  let form = document.querySelector("#search-form");

  form.addEventListener("submit", search);

  // adding the current time (week 4) //
  let now = new Date ();
  console.log(now.getDay());

  let hour = now.getHours();
  let minutes = now.getMinutes();
  
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[now.getDay()];

  let currentTime = document.querySelector(".currentTime");
  currentTime.innerHTML = `${day}, ${hour}:${minutes}`;

// Week 5 home-work Search Engine//

function showTemperature(response) {

  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector(".humidity").innerHTML = response.data.main.humidity;
  document.querySelector(".wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector(".description").innerHTML = response.data.weather[0].description;

}

function findCity(city) {

  let apiKey = "832aad42bc6237b12a78f01de89c7957";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function printSubmit(event) {

  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  findCity(city);
}

function searchLocation(position) {

let apiKey = "832aad42bc6237b12a78f01de89c7957";
let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", printSubmit);
let button = document.querySelector("#currentLocationButton");
button.addEventListener("click", getCurrentLocation);

findCity("Rustenburg");

