import Footer from "./components/footer/footer.component";
import Navbar from "./components/navbar/navbar.component";
import SearchBar from "./components/search-bar/search-bar.component";
import WeatherData from "./components/weather-data/weather-data.component";

import './app.styles.css'

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
        <main className="weather-container">
            <SearchBar />
            <WeatherData />
        </main>
      <Footer />
    </div>
  );
}
