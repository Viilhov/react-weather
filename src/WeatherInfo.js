import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherInfo">
      <div>
        <h1>{props.data.city}</h1>
        <div className="details">
          <FormattedDate date={props.data.date} />{" "}
        </div>
        <div className="details text-capitalize">{props.data.condition}</div>
      </div>
      <div className="row more-details">
        <div className="col-9">
          <div>
            <img src={props.data.icon} alt={props.data.condition} />

            <span className="temp">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-3">
          <div className="details mt-4">Humidity: {props.data.humidity}</div>
          <div className="details">Wind: {Math.round(props.data.wind)} m/h</div>
        </div>
      </div>
    </div>
  );
}
