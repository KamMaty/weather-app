import { useSelector, useDispatch } from "react-redux";
import { setCity, fetchWeather } from "../../store/actions";
import {ReactComponent as SearchIcon} from "../../assets/search-icon.svg";

import './search-bar.styles.css'

const SearchBar = () => {
  const city = useSelector((state) => state.city);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      // Only fetch weather if city is not empty
      dispatch(fetchWeather(city));
      dispatch(setCity("")); // Clear input after search
    }
  };

  const handleChange = (e) => {
    const action = setCity(e.target.value);
    dispatch(action);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleFocus = () => {
    dispatch(setCity("")); // Clear input on focus
  };

  return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Type your city"
          onFocus={handleFocus}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={city}
        />
        <button className='search-button' onClick={handleSearch}>
          <SearchIcon className="icon" />
        </button>
        {/* <span>Current city: {city}</span>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>} */}
      </div>
  );
};
export default SearchBar;
