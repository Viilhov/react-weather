import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temp">{Math.round(props.celcius)}</span>
      <span className="unit">°C</span>
    </span>
  );
}
