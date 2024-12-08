import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Mama's Pot Restaurant. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
