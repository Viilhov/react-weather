import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Roma" />
      </header>
      <footer>
        <a href="https://github.com/Viilhov/react-weather">Open-source code</a>{" "}
        , by Viil Hov Fjøse
      </footer>
    </div>
  );
}
