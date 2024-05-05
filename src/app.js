function searchCity(city) {
  // make an API call and change the interface
}

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  console.log(searchInput.value);
  let cityElement = document.querySelector("#app-city");
  console.log(cityElement);
  cityElement.innerHTML = searchInput.value;
  searchCity = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm);
searchForm.addEventListener("submit", showCity);

let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
let key = "b30a2d9fef22b5o0t83182be74814ec8";
let city = searchInput.value;
