import { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFarhenheiht(event) {
    event.preventDefault();
    setUnit("farhenheith");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function farhenheiht() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFarhenheiht}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temp">{Math.round(farhenheiht())}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
