import React from "react";
import "../assets/sass/Layout/Footer.scss";
import Logo from "../assets/images/kasa-logo-white.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        {" "}
        <img src={Logo} alt="logo kasa" />
      </div>
      <div className="footer_text">
        © 2024 Kasa. All rights reserved<div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
