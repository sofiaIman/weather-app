
import './App.css';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButton from './components/TopButton';
import Forecast from './components/Forecast';
import getWeatherData from './services/weatherService';

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData("weather", {q: "london"})
  }
  fetchWeather()

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
    <TopButton />
    <Inputs />

    <TimeAndLocation />
    <TemperatureAndDetails />

    <Forecast title="hourly forecast"/>
    <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
