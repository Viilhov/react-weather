import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `${response.data.condition.icon_url}`,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    const apiKey = "331711t40ba7f6a03e3o8bfc5f54faa4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather shadow">
        <form className="row mt-4 mb-5 weather-search" onSubmit={handleSubit}>
          <div className="col-9 search-input">
            <input
              type="search"
              placeholder="Enter a city"
              className="search-field form-control shadow-sm"
              onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
