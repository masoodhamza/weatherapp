// api key
apikey = "bFBVy0gRO7A35aTIiX7rEDrYaudYGQC3";

// get city
const getCity = async (city) => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const queryParameters = `?apikey=${apikey}&q=${city}`;
  const response = await fetch(baseUrl + queryParameters);
  const data = await response.json();
  return data[0];
};

// getCity("new york")
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//get weather of the city
const getWeather = async (locationKey) => {
  const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
  const queryParameters = `${locationKey}?apikey=${apikey}`;
  const response = await fetch(baseUrl + queryParameters);
  const data = await response.json();
  return data[0];
};

// getCity("new york")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
