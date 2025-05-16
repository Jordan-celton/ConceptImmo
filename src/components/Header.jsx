// src/components/Header.jsx
import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import logo from "../assets/LoGo2024.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo Agence Immobilière" />
        </Link>
      </div>
      <nav className="header-nav">
        <a href="/">Immobilier Particulier</a>
        <a href="/biens">Location</a>
        <a href="/contact">Viager</a>
        <a href="/contact">Professionnel</a>
        <a href="/contact">Estimez votre bien</a>
        <button>Nous contacter</button>
      </nav>
    </header>
  );
};

export default Header;
