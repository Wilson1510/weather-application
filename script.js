// DOM elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info');

// Event listener for search button
searchButton.addEventListener('click', () => {
    const location = searchInput.value;
    if (location.trim() !== '') {
        getWeatherData(location);
    }
});

// Fetch weather data from the API
function getWeatherData(location) {
    const apiKey = 'd08c7a8e72827f6ab1cbba8ac43ba27c'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// Display weather data on the page
function displayWeatherData(data) {
    console.log(data);
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;

    weatherInfo.innerHTML = weatherHTML;
}