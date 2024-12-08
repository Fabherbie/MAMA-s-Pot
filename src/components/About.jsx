import React from "react";
import PeppersImage from "../assets/images/Peppers.jpg";
import FreshIngredients from "../assets/images/Fresh.jpg";
import AuthenticRecipe from "../assets/images/Recipe creation.jpg";
import WarmHospitality from "../assets/images/Hopsitality (1).jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          At MAMA's Pot, we bring the heart of Nigeria to your plate with
          authentic, freshly cooked delicacies made from traditional recipes.
        </p>
      </div>

      {/* Restaurant Story Section */}
      <section className="about-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Founded with love for home-cooked meals, MAMA's Pot Restaurant has
            been a beacon of authentic Nigerian cuisine. From the bustling
            streets of Lagos to your dining table, we celebrate culture and
            flavor in every bite. Our chefs handpick the freshest ingredients to
            create dishes that reminds you of home.
          </p>
          <p>
            Whether it's our signature Ofada Rice with Ayamase or the rich taste
            of Egusi Soup with Pounded Yam, each meal tells a story of heritage
            and passion. At MAMA's Pot, every guest is family.
          </p>
        </div>
        <div className="story-image">
          <img src={PeppersImage} alt="Spices" />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="about-highlights">
        <h2>What Makes Us Special</h2>
        <div className="highlights-container">
          <div className="highlight-item">
            <img src={FreshIngredients} alt="Fresh Ingredients" />
            <h3>Fresh Ingredients</h3>
            <p>
              We source the finest local ingredients to deliver dishes that are
              both nutritious and bursting with flavor.
            </p>
          </div>
          <div className="highlight-item">
            <img src={AuthenticRecipe} alt="Authentic Recipes" />
            <h3>Authentic Recipes</h3>
            <p>
              Our recipes have been passed down through generations, preserving
              the true taste of Nigerian cuisine.
            </p>
          </div>
          <div className="highlight-item">
            <img src={WarmHospitality} alt="Warm Hospitality" />
            <h3>Warm Hospitality</h3>
            <p>
              At MAMA's Pot, we treat every guest like family. Expect a warm
              welcome and exceptional service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
