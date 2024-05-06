function refreshWeather(response) {
  let temperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#app-temperature-value");
  temperatureElement.innerHTML = Math.round(temperature);
  let city = response.data.city;
  let country = response.data.country;
  let location = `${city}, ${country}`;
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${wind}km/h`;

  let cityElement = document.querySelector("#app-city");
  cityElement.innerHTML = location;
}

function searchCity(city) {
  // make an API call and change the interface
  let key = "b30a2d9fef22b5o0t83182be74814ec8";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(url).then(refreshWeather);
}

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm);
searchForm.addEventListener("submit", showCity);

searchCity("Zurich");
