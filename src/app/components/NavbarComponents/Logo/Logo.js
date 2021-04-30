import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/athome_black.png";
import './Logo.css'

export default function Logo() {
  return (
    <Link to='/' className='container_logo'>
      <img className='logo' src={logo} alt='logo'></img>
    </Link>
  );
}
