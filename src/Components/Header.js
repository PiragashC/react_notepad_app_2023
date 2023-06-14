import React from "react";
import { useState } from "react";
const Header = ({ handleDarkMode }) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
    handleDarkMode((previousDarkMode) => !previousDarkMode);
  };
  return (
    <div className="header">
      <h1>Notepad</h1>
      <button onClick={handleToggle} className="save">
        {toggle ? `Dark Mode` : `Light Mode`}
      </button>
    </div>
  );
};

export default Header;
