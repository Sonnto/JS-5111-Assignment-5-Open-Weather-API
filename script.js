window.onload = function () {
  let locationElement = document.getElementById("location");
  let iconElement = document.getElementById("icon");
  let tempElement = document.getElementById("temperature");
  let conditionsElement = document.getElementById("conditions");
  let sunriseElement = document.getElementById("sunrise");
  let sunsetElement = document.getElementById("sunset");
  let btnOneElement = document.getElementById("toronto");
  let btnTwoElement = document.getElementById("hongkong");
  let outputElement = document.getElementById("output");

  let city1 = "toronto";
  let city2 = "hongkong";
  const myAPIkey = "a872cb7b5249e6a6d62803363e229c48"; //weather api

  const urlOne = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${myAPIkey}&units=metric`;

  const urlTwo = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${myAPIkey}&units=metric`;

  // ========= TORONTO =========

  btnOneElement.addEventListener("click", function () {
    outputElement.style.display = "block";

    let cityOneXHR = new XMLHttpRequest();
    cityOneXHR.onreadystatechange = function () {
      if (cityOneXHR.readyState === 4) {
        if (cityOneXHR.status === 200) {
          const dataOne = cityOneXHR.response;

          locationElement.innerHTML = dataOne.name;

          iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${dataOne.weather[0].icon}.png" alt="${dataOne.weather[0].description} icon" title="${dataOne.weather[0].description} icon"/>`;

          tempElement.innerHTML = Math.round(dataOne.main.temp) + "&#8451;";

          conditionsElement.innerHTML = dataOne.weather[0].description;

          sunriseElement.innerHTML = dataOne.sys.sunrise;

          sunsetElement.innerHTML = dataOne.sys.sunset;
        } else {
          locationElement.innerHTML = "API call was unsuccessful";
          console.log(cityOneXHR.status);
        }
      }
    };
    cityOneXHR.open("GET", urlOne);
    cityOneXHR.responseType = "json";
    cityOneXHR.send(null);
  });

  // ========= HONG KONG =========

  btnTwoElement.addEventListener("click", function () {
    outputElement.style.display = "block";

    let cityTwoXHR = new XMLHttpRequest();
    cityTwoXHR.onreadystatechange = function () {
      if (cityTwoXHR.readyState === 4) {
        if (cityTwoXHR.status === 200) {
          const dataTwo = cityTwoXHR.response;

          locationElement.innerHTML = dataTwo.name;

          iconElement.innerHTML = `<img src="http://openweathermap.org/img/w/${dataTwo.weather[0].icon}.png" alt="${dataTwo.weather[0].description} icon" title="${dataTwo.weather[0].description} icon"/>`;

          tempElement.innerHTML = Math.round(dataTwo.main.temp) + "&#8451;";

          conditionsElement.innerHTML = dataTwo.weather[0].description;

          sunriseElement.innerHTML = dataTwo.sys.sunrise;

          sunsetElement.innerHTML = dataTwo.sys.sunset;
        } else {
          locationElement.innerHTML = "API call was unsuccessful";
          console.log(cityTwoXHR.status);
        }
      }
    };
    cityTwoXHR.open("GET", urlTwo);
    cityTwoXHR.responseType = "json";
    cityTwoXHR.send(null);
  });
};
