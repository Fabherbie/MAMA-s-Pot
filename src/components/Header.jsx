import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo (2).png";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="MAMA's Pot Logo;" className="logo-img" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <button className="reservation-btn">Reservation</button>
      </nav>
    </header>
  );
};

export default Header;
