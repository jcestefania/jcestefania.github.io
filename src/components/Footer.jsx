import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Juan Carlos Estefanía</p>
      <p>Madrid, España</p>
    </footer>
  );
}

export default Footer;
