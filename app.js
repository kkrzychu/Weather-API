const key = ""; //Private key from openweathermap.org
const cityName = "London";


const search = document.getElementById("city");
const button = document.getElementById("submit");
const showCard = document.getElementById("content");

button.addEventListener("click", () => {
    const currentVal = search.value;

    getData(currentVal).then((data) => {
        console.log(data);

        showCard.innerHTML = `
      <div class="row actualWeather">
      ${data.name} -> ${data.main.temp}&#8451;
      
  </div>
  <div class="row infoRow">
      <div class="col-4">Min temperature:</div>
      <div class="col">${data.main.temp_min}&#8451;</div>
  </div>
  <div class="row infoRow">
      <div class="col-4">Max temperature</div>
      <div class="col">${data.main.temp_max}&#8451;</div>
  </div>
  <div class="row infoRow">
      <div class="col-4">Humidity</div>
      <div class="col">${data.main.humidity}%</div>
  </div>
  <div class="row infoRow">
      <div class="col-4">Pressure</div>
      <div class="col">${data.main.pressure} hPa</div>
  </div>
  <div class="row infoRow">
      <div class="col-4">Wind</div>
      <div class="col">${data.wind.speed} m/s</div>
  </div>
  <div class="row infoRow">
      <div class="col-4">Clouds</div>
      <div class="col">${data.clouds.all}%</div>
  </div>
      
      `;
    })
});


async function getData(cityName) {

    const key = "2b34175fa27df73334a1b20badb5617e";

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${key}`);
    const json = await res.json();

    return json;

}