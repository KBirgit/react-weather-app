import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let forecastTemperature = Math.round(props.data.main.temp);
    if (props.unit === "fahrenheit") {
      forecastTemperature = Math.round((forecastTemperature * 9) / 5 + 32);
    }
    return `${forecastTemperature}°`;
  }
  return (
    <div className="WeatherForecastPreview col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
