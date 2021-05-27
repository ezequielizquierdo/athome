import React from "react";
import "./Navbar.css";
import Logo from "./../NavbarComponents/Logo/Logo";
import CartWidget from "../NavbarComponents/CartWidget/CartWidget";
import ButtonsNav from "../ButtonsNav/ButtonsNav";
import MessageInNavbar from "../MessageInNavbar/MessageInNavbar";

export default function Navbar() {
  return (
    <div className="navbar_container">
      <div>
        <MessageInNavbar />
      </div>

      <div className="block">
        <div></div>
        <Logo />
        <CartWidget />
      </div>

      <div>
        <ButtonsNav />
      </div>
    </div>
  );
}
