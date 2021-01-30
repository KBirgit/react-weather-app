import React from "react";

export default function WeatherUnits(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <h1>
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">
            °C|
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <h1>
          <span className="temperature">{Math.round(fahrenheit())}</span>
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
            |°F
          </span>
        </h1>
      </div>
    );
  }
}
