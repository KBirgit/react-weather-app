import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherCondition from "./WeatherCondition";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <WeatherUnits
        celsius={props.data.temperature}
        unit={props.unit}
        setUnit={props.setUnit}
      />
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <p className="text-capitalize">{props.data.description}</p>
      <WeatherIcon code={props.data.icon} />
      <WeatherCondition
        humidity={props.data.humidity}
        wind={props.data.wind}
        unit={props.unit}
        setUnit={props.setUnit}
      />
    </div>
  );
}
