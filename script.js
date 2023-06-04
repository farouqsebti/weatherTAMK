// I used another API because our school's api isn't working, no measurement type because it is a temperature sensor

const table = document.querySelector("#table");
const temperatureTable = document.querySelector("#temperature-table");
const windSpeedTable = document.querySelector("#wind-speed-table");

fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather")
  .then((response) => response.json())
  .then((data) => {
    let sortedData = data.slice(0, 30);
    sortedData = sortedData.reverse();
    sortedData.map((item, index) => {
      const date = item.date_time.slice(0, 10);
      const time = item.date_time.slice(11, 19);

      const measurementType = Object.keys(item.data).join();
      const measurement = Object.values(item.data)[0].toFixed(2);

      index += 1;
      if (index < 10) index = `0${index}`;
      const tr = `
        <td>${index}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${measurementType}</td>
        <td>${measurement}</td>
        `;
      table.innerHTML += tr;
    });
  });

fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature")
  .then((response) => response.json())
  .then((data) => {
    let sortedData = data.slice(0, 20);
    sortedData.map((item, index) => {
      const date = item.date_time.slice(0, 10);
      const time = item.date_time.slice(11, 19);
      const measurement = item.temperature;

      index += 1;
      if (index < 10) index = `0${index}`;
      const tr = `
        <td>${index}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${measurement}</td>
        `;
      temperatureTable.innerHTML += tr;
    });
  });
fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed")
  .then((response) => response.json())
  .then((data) => {
    let sortedData = data.slice(0, 20);
    sortedData.map((item, index) => {
      const date = item.date_time.slice(0, 10);
      const time = item.date_time.slice(11, 19);
      const measurement = item.wind_speed;

      index += 1;
      if (index < 10) index = `0${index}`;
      const tr = `
        <td>${index}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${measurement}</td>
        `;
      windSpeedTable.innerHTML += tr;
    });
  });

const temperatureButton = document.querySelector(".temperature-table");
const windSpeedButton = document.querySelector(".wind-table");
const mainButton = document.querySelector(".main-table");

temperatureButton.addEventListener("click", () => {
  if(!temperatureTable.classList.contains("hide")) {
    return;
  }
  temperatureTable.classList.toggle("hide");
  windSpeedTable.classList.add("hide")
  table.classList.add("hide")
})

windSpeedButton.addEventListener("click", () => {
  if(!windSpeedTable.classList.contains("hide")) {
    return;
  }
  windSpeedTable.classList.toggle("hide");
  temperatureTable.classList.add("hide")
  table.classList.add("hide")
})

mainButton.addEventListener("click", () => {
  if(!table.classList.contains("hide")) {
    return;
  }
  table.classList.toggle("hide");
  temperatureTable.classList.add("hide")
  windSpeedTable.classList.add("hide")
})