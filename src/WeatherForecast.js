import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "331711t40ba7f6a03e3o8bfc5f54faa4";
  let query = props.city;
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);
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
