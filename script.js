// I used another API because our school's api isn't working, no measurement type because it is a temperature sensor


const table = document.querySelector("#table");

fetch(
  "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=baebc26f303fc02b5bbc600ca7257baa"
)
  .then((response) => response.json())
  .then((data) => {
    let sortedData = data.list.slice(0,30);
    console.log(data.list);
    sortedData = sortedData.reverse();
    sortedData.map((item, index) => {
      const date = item.dt_txt.slice(0, 11);
      let time = item.dt;
      const exactTime = new Date(time * 1000);
      const hours = exactTime.getHours();
      const minutes = exactTime.getMinutes();
      const seconds = exactTime.getSeconds();
      const amPmHours = hours % 12;
      const amPm = hours >= 12 ? 'PM' : 'AM';
      const formattedTime = `${amPmHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;
      
      const value = item.main.temp;
      index += 1;
      if (index < 10) index = `0${index}`;
      const tr = `
        <td>${index}</td>
        <td>${date}</td>
        <td>${formattedTime}</td>
        <td>${value}</td>
        `;
      table.innerHTML += tr;
    });
  });
