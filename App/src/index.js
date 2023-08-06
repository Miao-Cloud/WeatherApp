let now = new Date();

let tDay = document.querySelector(".day");
let tTime = document.querySelector(".time");

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let hour = now.getHours();
let min = now.getMinutes();

tDay.innerHTML = `${day}`;
tTime.innerHTML = `${hour}:${min}`;

//function cChange(event) {
//event.preventDefault();
//let cInput = document.querySelector("#city");
//let h1 = document.querySelector(".currentCity");
//h1.innerHTML = `${cInput.value}`;
//}

//let form = document.querySelector("#lookUp");
//form.addEventListener("submit", cChange);

//function showTemp(response) {
//let temperature = Math.round(response.data.main.temp);
//console.log(temperature);
//console.log(response);
//}

//let apiKey = "bf54175800a55e59e6c4d6461deeef12";
//let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}l&units=metric&appid=${apiKey}`;
//axios.get(apiURL).then(showTemp);

function showWeather(response) {
  console.log(response);
  document.querySelector(".currentCity").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#desc").innerHTML =
    response.data.weather[0].description;
}

function searchCity(city) {
  let apiKey = "bf54175800a55e59e6c4d6461deeef12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function cSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city").value;
  searchCity(city);
}

let searchForm = document.querySelector("#lookUp");
searchForm.addEventListener("submit", cSubmit);

searchCity("London");
