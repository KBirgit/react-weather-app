import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row m-2">
        <WeatherForecastPreview data={forecast.list[0]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[1]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[2]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[3]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[4]} unit={props.unit} />
      </div>
    );
  } else {
    let apiKey = "242f24100968a339d770d17bf88c51f0";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
