import React from "react";
import logo from "../../../../assets/athome_black.png";
import './Logo.css'

export default function Logo() {
  return (
    <div className='container_logo'>
      <img className='logo' src={logo} alt='logo'></img>
    </div>
  );
}
