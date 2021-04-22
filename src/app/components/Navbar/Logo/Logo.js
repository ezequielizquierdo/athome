import React from "react";
import logo from "../../../../assets/athome_white.png";
import './Logo.css'

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt='logo'></img>
    </div>
  );
}
