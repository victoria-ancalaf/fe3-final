import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "./utils/Context";

const Navbar = () => {
  const { dispatch, state } = useDentistStates();

  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      <div>
        <h1>DH Odonto</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={changeTheme} className="theme-btn">
          {state.theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
