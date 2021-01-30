import React from "react";

export default function WeatherCondition(props) {
  if (props.unit === "celsius") {
    return (
      <div className="WeatherCondition">
        <div className="row p-2">
          <div className="col-sm">Humidity: {props.humidity}%</div>
          <div className="col-sm">Wind: {Math.round(props.wind)} km/h</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherCondition">
        <div className="row p-2">
          <div className="col-sm">Humidity: {props.humidity}%</div>
          <div className="col-sm">
            Wind: {Math.round(props.wind / 1.609)} mph
          </div>
        </div>
      </div>
    );
  }
}
