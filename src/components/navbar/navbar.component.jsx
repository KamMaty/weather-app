import logo from "../../assets/logo_transparent.png";

import './navbar.styles.css'

const Navbar = () => {
  return (
      <div className='navbar'>
        <img src={logo} alt="logo" className='logo-img' />
        <span>WeatherApp</span>
      </div>
  );
};

export default Navbar;
