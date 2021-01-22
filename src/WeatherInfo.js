import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <WeatherTemperature celsius={props.data.temperature} />
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <p className="text-capitalize">{props.data.description}</p>
      <WeatherIcon code={props.data.icon} />
      <div className="row p-2">
        <div className="col-sm">Humidity: {props.data.humidity}%</div>
        <div className="col-sm">Wind: {Math.round(props.data.wind)} km/h</div>
      </div>
    </div>
  );
}
