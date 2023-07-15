import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(response.data.time * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weather shadow">
        <form className="row mt-4 mb-5 weather-search">
          <div className="col-9 search-input">
            <input
              type="search"
              placeholder="Enter a city"
              className="search-field form-control shadow-sm"
            />
          </div>
          <div className="col-3 submit">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 shadow"
            />
          </div>
        </form>

        <div>
          <h1>{weatherData.city}</h1>
          <div className="details">
            <FormattedDate date={weatherData.date} />{" "}
          </div>
          <div className="details text-capitalize">{weatherData.condition}</div>
        </div>
        <div className="row more-details">
          <div className="col-9">
            <div>
              <img src={weatherData.icon} alt={weatherData.condition} />

              <span className="temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-3">
            <div className="details mt-4">Humidity: {weatherData.humidity}</div>
            <div className="details">
              Wind: {Math.round(weatherData.wind)} m/h
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "331711t40ba7f6a03e3o8bfc5f54faa4";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
