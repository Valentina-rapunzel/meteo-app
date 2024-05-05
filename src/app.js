function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  console.log(searchInput.value);
  let searchCity = document.querySelector("#app-city");
  console.log(searchCity);
  searchCity.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
console.log(searchForm);
searchForm.addEventListener("submit", searchCity);
