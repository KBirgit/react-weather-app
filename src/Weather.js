import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "242f24100968a339d770d17bf88c51f0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="form-row align-items-center">
            <div className="col-11">
              <input
                type="search"
                className="form-control form-control-sm shadow-sm border-0"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-1">
              <button
                type="submit"
                className="form-control-sm btn btn-sm btn-light shadow-sm border-0 searchIcon"
                placeholder="🔍"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
        <WeatherForecast city={weatherData.city} unit={unit} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
