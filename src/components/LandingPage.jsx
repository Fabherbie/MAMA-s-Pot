import React from "react";

const LandingPage = () => {
  return (
    <div
      className="landing"
      style={{
        backgroundImage: `url("/images/Fresh Ingredients.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="landing-content">
        <h1>Welcome to MAMA's Pot Restaurant</h1>
        <p>Your Home for Authentic Nigerian Delicacies</p>
        <a href="/menu" className="btn">
          Explore Our Menu
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
