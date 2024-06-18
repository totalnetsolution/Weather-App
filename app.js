const form = document.querySelector("#form");
const cityInput = document.querySelector("#city");
const cardContainer = document.querySelector("#card-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
    cityInput.value = '';
  }
});