import React from "react";

export default function weatherForecastDay(props) {
  return (
    <div>
      <div className="WeatherForecast-day">{props.data.time}</div>
      <div className="WeatherForecast-icon">
        {props.data.condition.icon_url}
      </div>
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">
          {props.data.temperature.maximum}°
        </span>
        <span className="Weatherforeacast-temp-min">
          {props.data.temperature.minimum}°
        </span>
      </div>
    </div>
  );
}
