import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather shadow">
      <form className="row mt-5 weather-search">
        <div className="col-6 search-input">
          <input
            type="search"
            placeholder="Enter a city"
            className="search-field form-control"
          />
        </div>
        <div className="col-2 submit">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        <div className="col-4 submit">
          <input type="submit" value="Current" className="btn btn-success " />
        </div>
      </form>

      <div className="ms-3">
        <h1>Lisbon</h1>
        <div className="details">Monday 15:52</div>
        <div className="details">Clear</div>
      </div>
      <div className="row more-details mt-3 ms-1">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          <span>35</span>°C
        </div>
        <div className="col-6">
          <div className="details pt-3">Percipitation: 50%</div>
          <div className="details">Wind: 11km/h</div>
        </div>
      </div>
    </div>
  );
}
