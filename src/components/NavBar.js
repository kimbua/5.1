import { useState } from "react";
import logo from "../images/logo.png";
const NavBar = () => {
  const [navState, setNavState] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  window.addEventListener("scroll", changeNavColor);
  return (
    <nav id="nav" className={navState ? "nav scrolled" : "nav"}>
      <div className="container flex space-between align-center">
        <img src={logo} width="130" alt="logo" />
        <div className="links flex">
          <a href="#.">Premium</a>
          <a href="#.">Support</a>
          <a href="#.">Download</a>
          <span>|</span>
          <a href="#.">Sign up</a>
          <a href="#.">Log in</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
