<h1>Weather App</h1>
<h3>Be updated with current weather</h3>
<hr>
![weather](https://user-images.githubusercontent.com/49762757/116293541-78efdb80-a7b0-11eb-8ed3-502b8d97687b.png)

<a href="https://hamzaweatherapp.netlify.app/">Live demo</a>

<hr>

<h2>What Weather App do</h2>
<p>This app will provide current weather of selected city</p>

<h2>How to use the App</h2>
<ol>
    <li>Add city and press enter</li>
    <li>Choose your city</li>
    <li>results will be displayed</li>    
</ol>

<h2>Features</h2>
<ul>
    <li>Beautiful and simple GUI</li>
    <li>Responsive design that works with desktop and mobile</li>
    <li>Graphical respresentation of day and night</li>
    <li>Beautiful grphical icons to show weather</li>
    <li>Temperature selection</li>    
</ul>

<h2>How do i develope this app</h2>
<h3>Step 1: Get weather API</h3>
<p>To get weather api there are several websites available. I used https://developer.accuweather.com/apis  and signup and follow the following steps:-</p>
<ul>
    <li>Go to <code>MY APPS</code> and <code>add a new App</code></li>
    <li>Get API key (this key be used to get weather info)</li>
</ul>

<h3>Step 2: Get the Weather details</h3>
<small>I use forcast.js to get weather details</small>
<ul>
    <li>Get city details</li>
<code>
<pre>
    const getCity = async (city) => {
        
        const baseUrl = "https://dataservice.accuweather.com/locations/v1/cities/search";

        const queryParameters = `?apikey=${apikey}&q=${city}`;

        const response = await fetch(baseUrl + queryParameters);

        const data = await response.json();

        return data[0];

    };

</pre>
</code>

<li>Get city weather details</li>
<code>
<pre>
    const getWeather = async (locationKey) => {

        const baseUrl = "https://dataservice.accuweather.com/currentconditions/v1/";

        const queryParameters = `${locationKey}?apikey=${apikey}`;

        const response = await fetch(baseUrl + queryParameters);

        const data = await response.json();

        return data[0];
    };`

</pre>
</code>
</ul>

<h3>Step 3: Update UI</h3>
<p>app.js code is updating UI for weather by DOM manupulation</p>

<h2>Technologies</h2>
<ul>
    <li>JavaScript</li>
    <li>Bootstrap</li>
    <li>HTML5</li>
    <li>CSS3</li>
</ul>

<h2>About Code</h2>
<ul>
    <li>Simple HTML/CSS/JS</li>
    <li>Well organized</li>
    <li>Well comminted</li>
    <li>Self descriptive</li>
    <li>Easy to understand</li>
</ul>

<h5>Please ⭐️ this repository if this project helped you!</h5>
