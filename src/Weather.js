import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h3>{weatherData.city}</h3>
        <h1>{Math.round(weatherData.temperature)}°C|F</h1>
        <h4>
          <FormattedDate date={weatherData.date} />
        </h4>
        <h4 className="text-capitalize">{weatherData.description}</h4>
        <img src={weatherData.iconUrl} alt={weatherData.description} />
        <div className="row p-2">
          <div className="col-sm">Humidity: {weatherData.humidity}%</div>
          <div className="col-sm">Wind: {weatherData.wind} km/h</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "242f24100968a339d770d17bf88c51f0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
