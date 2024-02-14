function updateTime() {
  //Los Angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  console.log("Here");

  let cityTimeZone = event.target.value;
  console.log(cityTimeZone);

  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  /* if (cityTimeZone === "America/New_York") {
    cityTimeZone = "America/New York";
  }*/
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="time-display" >
          <div>
            <h2 class="city">${cityName}</h2>
            <p class="date">${cityDate}</p>
          </div>
          <div>
            <p class="time">${cityTime} </p>
          </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let selectCityElement = document.querySelector("#cityselect");
selectCityElement.addEventListener("change", updateCity);
