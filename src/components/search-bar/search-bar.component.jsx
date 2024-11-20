import { useSelector, useDispatch } from "react-redux";
import { setCity, setWeather } from "../../store/actions";
const SearchBar = () => {
  const city = useSelector((state) => state.city);
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const fetchUserCity = async () => {
    const userCityResponse = await fetch(
      `${process.env.REACT_APP_API_URL}geo/1.0/direct?q=${city}&limit=2&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!userCityResponse.ok) throw new Error("City not found");
    const userCity = await userCityResponse.json();

    // console.log(userCity);
    // console.log(userCity[0].lat);
    console.log("fetching city");
    console.log(userCity);
    fetchUserWeather(userCity);
  };

  const fetchUserWeather = async (userCity) => {
    console.log("fetching weather start");
    // console.log(
    //   `${process.env.REACT_APP_API_URL}data/2.5/weather?lat=${userCity[0].lat}&lon=${userCity[0].lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    // );
    const weatherResponse = await fetch(
      `${process.env.REACT_APP_API_URL}data/2.5/weather?lat=${userCity[0].lat}&lon=${userCity[0].lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    const userWeather = await weatherResponse.json();
    console.log(userWeather);
    dispatch(setWeather(userWeather));
    // console.log("Im here");
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
      <button onClick={fetchUserCity}>Search</button>
      <br />
      <span>Current city: {city}</span>
    </div>
  );
};
export default SearchBar;
