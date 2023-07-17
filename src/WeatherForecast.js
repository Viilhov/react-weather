import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <div className="WeatherForecast-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="clear sky"
            />
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">42°</span>
            <span className="Weatherforeacast-temp-min">25°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
