import React from "react";
import "./Navbar.css";
import Logo from './../NavbarComponents/Logo/Logo'
import CartWidget from "../NavbarComponents/CartWidget/CartWidget";

export default function Navbar() {

  return (
    <div className="navbar_container">
      <div></div>
      <Logo/>
      <CartWidget />
    </div>
  );
}
