import React from "react";
import "./css/header.css";
import Switch from "./switch";

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p className="header-total">Total Followers:23,024</p>
          </div>
          <Switch />
        </div>
      </div>
    </header>
  );
}

export default Header;
