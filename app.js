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

function displayWeatherCard(data) {
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('col-md-4', 'mb-4');
  weatherCard.innerHTML = `
  <div class='bg-white border border-gray-800 shadow-lg ring ring-gray-700 ring-opacity-50 w-100 mx-auto mt-5 rounded-lg p-4 mb-5'>
      <h1 class='text-2xl'>${data.location.name}</h1>
      <p class='text-gray-500'>${data.location.localtime}, ${data.location.country}</p>
      <div class='mt-5 d-flex justify-content-between align-items-center mx-5 pb-4'>
        <h2 class='text-4xl md:text-7xl lg:text-8xl'>${data.current.temp_c}°C</h2>
        <img width="160px" src=${data.current.condition.icon} alt='weatherImg' />
      </div>
      <h4>${data.current.condition.text}</h4>
    </div>
  `;
  cardContainer.insertBefore(weatherCard, cardContainer.firstChild);
}

