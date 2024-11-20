import { useSelector, useDispatch } from "react-redux";
import { setCity, fetchWeather } from "../../store/actions";
const SearchBar = () => {
  const city = useSelector((state) => state.city);
  const weather = useSelector((state) => state.weather);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchWeather(city)); // Dispatch the action to fetch weather
  };

  const handleChange = (e) => {
    const action = setCity(e.target.value);
    dispatch(action);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type your city"
        onChange={handleChange}
        value={city}
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      {/* <span>Current city: {city}</span> */}
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}
    </div>
  );
};
export default SearchBar;
