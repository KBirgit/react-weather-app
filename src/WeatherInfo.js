import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3>{props.data.city}</h3>
      <WeatherTemperature celsius={props.data.temperature} />
      <h4>
        <FormattedDate date={props.data.date} />
      </h4>
      <h4 className="text-capitalize">{props.data.description}</h4>
      <WeatherIcon code={props.data.icon} />
      <div className="row p-2">
        <div className="col-sm">Humidity: {props.data.humidity}%</div>
        <div className="col-sm">Wind: {props.data.wind} km/h</div>
      </div>
    </div>
  );
}
