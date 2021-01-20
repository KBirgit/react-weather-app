import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h3>{props.data.city}</h3>
      <h1>{Math.round(props.data.temperature)}°C|F</h1>
      <h4>
        <FormattedDate date={props.data.date} />
      </h4>
      <h4 className="text-capitalize">{props.data.description}</h4>
      <img src={props.data.iconUrl} alt={props.data.description} />
      <div className="row p-2">
        <div className="col-sm">Humidity: {props.data.humidity}%</div>
        <div className="col-sm">Wind: {props.data.wind} km/h</div>
      </div>
    </div>
  );
}
