import React from "react";

export default function WeatherForecastFive(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  function weatherIcon() {
    let icon = `${props.data.condition.icon_url}`;
    return icon;
  }
  function altIcon() {
    let alt = `${props.data.condition.icon}`;
    return alt;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img src={weatherIcon()} alt={altIcon()} />
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
        <span className="Weatherforeacast-temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
