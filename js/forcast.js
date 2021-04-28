// api key
apikey = "bFBVy0gRO7A35aTIiX7rEDrYaudYGQC3";

// get city
const getCity = async (city) => {
  const baseUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/search";
  const queryParameters = `?apikey=${apikey}&q=${city}`;
  const response = await fetch(baseUrl + queryParameters);
  const data = await response.json();
  return data[0];
};

//get weather of the city
const getWeather = async (locationKey) => {
  const baseUrl = "https://dataservice.accuweather.com/currentconditions/v1/";
  const queryParameters = `${locationKey}?apikey=${apikey}`;
  const response = await fetch(baseUrl + queryParameters);
  const data = await response.json();
  return data[0];
};
