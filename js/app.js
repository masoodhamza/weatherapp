const cityForm = document.querySelector("form");

//update city
const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const cityWeather = await getWeather(cityDetails.Key);

  return { cityDetails, cityWeather };
};

//get city name from form
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => {
      console.log(err);
      throw new Error("Please enter the correct city name");
    });
});

// UI update
const card = document.querySelector(".card");

const updateUI = (data) => {
  const { cityDetails, cityWeather } = data;

  card.innerHTML = `
          <!-- Image for day/night -->
          <img src="img/${
            cityWeather.IsDayTime ? "day.svg" : "night.svg"
          }" class="card-img-top">
          <div class="icon mx-auto bg-light">
              <img src="img/icons/${cityWeather.WeatherIcon}.svg">
          </div>
          <!-- Weather details -->
          <div class="text-muted text-uppercase">
              <h4 class="my-1">${cityDetails.EnglishName}</h4>
              <h5 class="my-1">(${cityDetails.AdministrativeArea.EnglishName})</h5>
              <h6>${cityDetails.Country.EnglishName}</h6>
              <div class="mt-3">${cityWeather.WeatherText}</div>
              <div class="display-4 my-2">
                  <span>${cityWeather.Temperature.Metric.Value}</span>
                  <span>&deg;C</span>
              </div>
          </div>
      `;

  card.classList.remove("d-none");
};
