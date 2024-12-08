import React from "react";
import { Link } from "react-router-dom";
import spaghettiImage from "../assets/images/Spaghetti.jpg";
import chickenFriedRiceImage from "../assets/images/CFR.jpg";
import poundedYamImage from "../assets/images/pounded-yam.jpg";
import villageRiceImage from "../assets/images/Village-rice.jpg";
import ikokoreImage from "../assets/images/ikokore.jpg";
import ofadaRiceImage from "../assets/images/Ofada-rice.jpg";

const menuData = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    description: "Rich and flavorful pasta dish.",
    image: spaghettiImage,
  },
  {
    id: 2,
    name: "Chicken Fried Rice",
    description: "A classic favorite with a twist.",
    image: chickenFriedRiceImage,
  },
  {
    id: 3,
    name: "Pounded Yam and Egusi Soup",
    description: "A delicious Nigerian delicacy.",
    image: poundedYamImage,
  },
  {
    id: 4,
    name: "Village Rice",
    description: "Smoky rice cooked with native ingredients.",
    image: villageRiceImage,
  },
  {
    id: 5,
    name: "Ikokore",
    description: "A traditional delicacy made from water yam.",
    image: ikokoreImage,
  },
  {
    id: 6,
    name: "Ofada Rice with Ayamase Sauce",
    description: "Local rice served with spicy green sauce.",
    image: ofadaRiceImage,
  },
];

const Menu = () => {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu__list">
        {menuData.map((item) => (
          <div key={item.id} className="menu__item">
            <img src={item.image} alt={item.name} className="menu__image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Link to={`/menu/${item.id}`} className="menu__link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
