import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    description:
      "This rich and flavorful pasta dish is cooked with a hearty tomato sauce, ground beef, and a blend of Italian herbs. Perfectly paired with garlic bread.",
    ingredients: ["Spaghetti", "Tomatoes", "Ground Beef", "Italian Herbs"],
    image: spaghettiImage,
  },
  {
    id: 2,
    name: "Chicken Fried Rice",
    description:
      "A classic twist on fried rice, featuring tender chicken chunks, fresh vegetables, and perfectly seasoned rice for a delightful experience.",
    ingredients: [
      "Rice",
      "Chicken",
      "Carrots",
      "Green Peas",
      "Soy Sauce",
      "Bell Peppers",
    ],
    image: chickenFriedRiceImage,
  },
  {
    id: 3,
    name: "Pounded Yam and Egusi Soup",
    description:
      "A staple Nigerian dish featuring soft pounded yam paired with a richly spiced melon seed soup, enriched with vegetables and assorted meats.",
    ingredients: ["Yam", "Egusi", "Palm Oil", "Spinach", "Ugwu Leaves", "Beef"],
    image: poundedYamImage,
  },
  {
    id: 4,
    name: "Village Rice",
    description:
      "A smoky and flavorful rice dish cooked with native spices, palm oil, and a mix of proteins. It's a taste of tradition on every plate.",
    ingredients: [
      "Rice",
      "Palm Oil",
      "Fish",
      "Crayfish",
      "Ponmo",
      "Ugwu / Spinach",
      "Native Spices",
    ],
    image: villageRiceImage,
  },
  {
    id: 5,
    name: "Ikokore",
    description:
      "A traditional dish from the Yoruba region, made from grated water yam cooked in a spicy sauce with fish and assorted meats.",
    ingredients: ["Water Yam", "Palm Oil", "Pepper", "Ponmo", "Fish"],
    image: ikokoreImage,
  },
  {
    id: 6,
    name: "Ofada Rice with Ayamase Sauce",
    description:
      "Local Nigerian rice paired with a spicy green pepper sauce, served with assorted meats and boiled eggs.",
    ingredients: [
      "Ofada Rice",
      "Green Peppers",
      "Palm Oil",
      "Ponmo",
      "Meat",
      "Shaki",
      "Roundabout",
      "Eggs",
    ],
    image: ofadaRiceImage,
  },
];

const MealDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const meal = menuData.find((meal) => meal.id === parseInt(id));

  return (
    <div className="meal-details">
      <button className="back-btn" onClick={() => navigate("/menu")}>
        &larr; Back to Menu
      </button>
      {meal ? (
        <>
          <div className="meal-details__image">
            <img src={meal.image} alt={meal.name} />
          </div>
          <div className="meal-details__info">
            <h1>{meal.name}</h1>
            <p>{meal.description}</p>
            <h2>Ingredients:</h2>
            <ul>
              {meal.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <h1>Meal Not Found</h1>
      )}
    </div>
  );
};

export default MealDetails;
