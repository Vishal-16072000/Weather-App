const apiKey = "56f40a1243ca1c7fadfb8b8241306e25";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(response)
    if(response.status == 404 || response.status == 400){
        document.querySelector(".error").style.display = "block";
    }

    console.log(data);
    document.querySelector(".temp").textContent=Math.round(data.main.temp) + "°C";
    document.querySelector(".city").textContent=data.name;
    document.querySelector(".humidity").textContent=data.main.humidity+'%';
    document.querySelector(".wind").textContent=data.wind.speed+'km/hrs';
    let weatherInfo = (data.weather[0].main).toLowerCase();
    document.querySelector(".weather-icon").src = `images/${weatherInfo}.png`;
}


searchBtn.addEventListener("click", () => {
    console.log('click');
    checkWeather(searchBox.value);
    document.querySelector(".error").style.display = "none";
})

document.querySelector('body').addEventListener("keypress", (event) => {
    if(event.key === 'Enter'){
        console.log('Enter press');
        checkWeather(searchBox.value);
        document.querySelector(".error").style.display = "none";
    }
})









