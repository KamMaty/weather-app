import Navbar from "./components/navbar/navbar.component";
import SearchBar from "./components/search-bar/search-bar.component";
import WeatherData from "./components/weather-data/weather-data.component"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <WeatherData />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
