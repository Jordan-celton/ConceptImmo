import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-overlay">
        <h1>Découvrez Votre Prochaine Maison de Rêve</h1>
        <p>Trouvez les meilleures propriétés en quelques clics</p>
        <Link to="/properties" className="cta-button">
          Explorer les Biens
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
