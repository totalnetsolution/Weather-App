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

async function getWeatherData(city) {
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city}&aqi=no`);
    displayWeatherCard(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Please put correct name of city and try again.');
  }
}
