import { useSelector, useDispatch } from "react-redux";
import { setCity, fetchWeather } from "../../store/actions";
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
    <div className="flex justify-center m-4">
      <div className="flex justify-between border rounded-xl w-2/4 border-gray-300 p-1">
        <input
          className="w-full focus:outline-none"
          type="text"
          placeholder="Type your city"
          onFocus={handleFocus}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={city}
        />
        <button onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        {/* <span>Current city: {city}</span>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>} */}
      </div>
    </div>
  );
};
export default SearchBar;
