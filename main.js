const inputCity = document.getElementById("input-city");
const cityHeading = document.getElementById("city-heading");
const feelsLike = document.getElementById("feels_like");
const temparature = document.getElementById("temp");
const humid = document.getElementById("humidity");
const windSpeed = document.getElementById("wind_speed");
const submitBtn = document.getElementById("submit");

// Popular Cities
const kolkata = document.getElementById("kolkata");
const mumbai = document.getElementById("mumbai");
const delhi = document.getElementById("delhi");
const bangalore = document.getElementById("bangalore");
const hyderabad = document.getElementById("hyderabad");

var cloud_pct = "";
var temp = "";
var feels_like = "";
var humidity = "";
var min_temp = "";
var max_temp = "";
var wind_speed = "";
var wind_degrees = "";
var sunrise = "";
var sunset = "";

const citiesList = [
  "Tokyo",
  "New York",
  "Mumbai",
  "Mexico City",
  "Beijing",
  "Shanghai",
  "Los Angeles",
  "Jakarta",
  "Dhaka",
  "Sao Paulo",
  "London",
  "Manila",
  "Istanbul",
  "Karachi",
  "Cairo",
  "Chicago",
  "Lagos",
  "Paris",
  "Houston",
  "Kolkata",
  "Moscow",
  "Osaka",
  "Seoul",
  "Philadelphia",
  "Mizoram",
  "Guangzhou",
  "Shenzhen",
  "Bengaluru",
  "Wuhan",
  "Hyderabad",
  "Lahore",
  "Bogota",
  "Chengdu",
  "Saint Petersburg",
  "Pune",
  "Ahmedabad",
  "Surat",
  "Chennai",
  "Berlin",
  "Kyoto",
  "Amsterdam",
];

const getWeather = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "556d1ea049msh4a20c783a4470a5p1259d7jsn4367a73d9ef1",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  return new Promise((resolve, reject) => {
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        cloud_pct = response.cloud_pct;
        temp = response.temp;
        feels_like = response.feels_like;
        humidity = response.humidity;
        min_temp = response.min_temp;
        max_temp = response.max_temp;
        wind_speed = response.wind_speed;
        wind_degrees = response.wind_degrees;
        sunrise = response.sunrise;
        sunset = response.sunset;

        resolve();
      })
      .catch((err) => reject(err.message));
  });
};

const showWeather = (city) => {
  cityHeading.innerHTML = capitalizeFirstLetter(city.value);

  getWeather(city.value).then((res) => {
    temparature.innerHTML = temp;
    feelsLike.innerHTML = feels_like;
    humid.innerHTML = humidity;
    windSpeed.innerHTML = wind_speed;
  });
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log(inputCity.value);
  showWeather(inputCity);
});

let city1 = citiesList[Math.floor(Math.random() * citiesList.length)];
document.getElementById(`city-1`).innerHTML = city1;
getWeather(city1).then(() => {
  document.getElementById(`c1`).innerHTML = cloud_pct;
  document.getElementById(`c2`).innerHTML = feels_like;
  document.getElementById(`c3`).innerHTML = humidity;
  document.getElementById(`c4`).innerHTML = max_temp;
  document.getElementById(`c5`).innerHTML = min_temp;
  document.getElementById(`c6`).innerHTML = sunrise;
  document.getElementById(`c7`).innerHTML = sunset;
  document.getElementById(`c8`).innerHTML = temp;
  document.getElementById(`c9`).innerHTML = wind_degrees;
  document.getElementById(`c10`).innerHTML = wind_speed;
});

let city2 = citiesList[Math.floor(Math.random() * citiesList.length)];
document.getElementById(`city-2`).innerHTML = city2;
getWeather(city2).then(() => {
  document.getElementById(`c11`).innerHTML = cloud_pct;
  document.getElementById(`c12`).innerHTML = feels_like;
  document.getElementById(`c13`).innerHTML = humidity;
  document.getElementById(`c14`).innerHTML = max_temp;
  document.getElementById(`c15`).innerHTML = min_temp;
  document.getElementById(`c16`).innerHTML = sunrise;
  document.getElementById(`c17`).innerHTML = sunset;
  document.getElementById(`c18`).innerHTML = temp;
  document.getElementById(`c19`).innerHTML = wind_degrees;
  document.getElementById(`c20`).innerHTML = wind_speed;
});

let city3 = citiesList[Math.floor(Math.random() * citiesList.length)];
document.getElementById(`city-3`).innerHTML = city3;
getWeather(city3).then(() => {
  document.getElementById(`c21`).innerHTML = cloud_pct;
  document.getElementById(`c22`).innerHTML = feels_like;
  document.getElementById(`c23`).innerHTML = humidity;
  document.getElementById(`c24`).innerHTML = max_temp;
  document.getElementById(`c25`).innerHTML = min_temp;
  document.getElementById(`c26`).innerHTML = sunrise;
  document.getElementById(`c27`).innerHTML = sunset;
  document.getElementById(`c28`).innerHTML = temp;
  document.getElementById(`c29`).innerHTML = wind_degrees;
  document.getElementById(`c30`).innerHTML = wind_speed;
});

kolkata.addEventListener("click", () => {
  inputCity.value = "Kolkata";
  showWeather(inputCity);
});
mumbai.addEventListener("click", () => {
  inputCity.value = "mumbai";
  showWeather(inputCity);
});
delhi.addEventListener("click", () => {
  inputCity.value = "delhi";
  showWeather(inputCity);
});
hyderabad.addEventListener("click", () => {
  inputCity.value = "hyderabad";
  showWeather(inputCity);
});
bangalore.addEventListener("click", () => {
  inputCity.value = "bangalore";
  showWeather(inputCity);
});
