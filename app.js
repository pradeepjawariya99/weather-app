const apiKey = "38c4edaf20d9a4450d6e35775f832cac";

async function getWeather() {

    try {

        const city = document.getElementById("city").value;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        document.getElementById("cityName").innerText = data.name;

        document.getElementById("temp").innerText =
            Math.round(data.main.temp) + "°C";

        document.getElementById("weather").innerText =
            data.weather[0].main;

        document.getElementById("humidity").innerText =
            "Humidity: " + data.main.humidity + "%";

        document.getElementById("wind").innerText =
            "Wind Speed: " + data.wind.speed + " km/h";

    } catch (error) {
        alert("Network error");
    }
}