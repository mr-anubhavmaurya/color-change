let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityId = document.getElementById("city");

let getWeather = () => {

    let city_name = cityId.value;
    if (city_name.length == 0) {
        result.innerHTML = `<h3>Please enter a city name </h3>`
    }
    else {

        const API_key = "81c9000f5fb8a49a8801b382b90cb292";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`;
        cityId.value = "";
        fetch(url).then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                result.innerHTML = `
                    <h2>${data.name}</h2>
                    <h4 class="weather">${data.weather[0].main}</h4>
                    <h4 class="desc">${data.weather[0].description}</h4>
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" />
                    <h1>${data.main.temp}&#176;C </h1>
                    <div class="temp-container">
                        <div>
                            <h4 class="title">min</h4>
                            <h4 class="temp">${data.main.temp_min}&#176;C </h4>
                        </div>
                        <div>
                            <h4 class="title">max</h4>
                            <h4 class="temp">${data.main.temp_max}&#176;C </h4>
                        </div>
                    </div>
                `;
            })
            .catch(() => {
                result.innerHTML = `<h3 class="msg"> City not found </h3>`;
            });
    }


};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);