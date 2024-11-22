import logo from "../../assets/logo_transparent.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between p-4">
        <img src={logo} alt="logo" className="h-8 w-8 mr-4" />
        <span>WeatherApp</span>
      </div>
      <div className="w-full h-px bg-gray-300"></div>
    </div>
  );
};

export default Navbar;
