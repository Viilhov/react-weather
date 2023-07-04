import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather shadow">
      <form className="row mt-4 mb-5 weather-search">
        <div className="col-9 search-input">
          <input
            type="search"
            placeholder="Enter a city"
            className="search-field form-control"
          />
        </div>
        <div className="col-3 submit">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
      </form>

      <div>
        <h1>Lisbon</h1>
        <div className="details">Monday 15:52</div>
        <div className="details">Clear</div>
      </div>
      <div className="row more-details">
        <div className="col-9">
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />

            <span className="temp">35</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-3">
          <div className="details mt-4">Percipitation: 50%</div>
          <div className="details">Wind: 11km/h</div>
        </div>
      </div>
    </div>
  );
}
