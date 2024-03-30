function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = document.getElementById('weatherData');
            weatherData.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherData = document.getElementById('weatherData');
            weatherData.innerHTML = `<p>Failed to fetch weather data. Please try again later.</p>`;
        });
}
