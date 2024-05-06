// Get data from the API and display it on the page 
function refreshWeather(response) {
  let temperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#app-temperature-value");
  temperatureElement.innerHTML = Math.round(temperature);
  let city = response.data.city;
  let country = response.data.country;
  let location = `${city}, ${country}`;
  let cityElement = document.querySelector("#app-city");
  cityElement.innerHTML = location;

  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${wind}km/h`;

  let description = response.data.condition.description;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = description;
}

 // make an API call and change the interface
function searchCity(city) {
 
  let key = "b30a2d9fef22b5o0t83182be74814ec8";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
  axios.get(url).then(refreshWeather);
}
// Get data from the input 
function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}
// Event Listener that searches and shows city after submit 
let searchForm = document.querySelector("#search-form");
console.log(searchForm);
searchForm.addEventListener("submit", showCity);
// to show a default city 
searchCity("Zurich");

// to get todays date
