// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div>
            <h2>MonAgence</h2>
            <p>
              Votre agence immobilière de confiance pour trouver le bien idéal.
            </p>
          </div>
          <div>
            <h3>Liens rapides</h3>
            <ul>
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <a href="/biens">Nos Biens</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <p>📍 123 Rue des Champs, Paris</p>
            <p>📞 +33 1 23 45 67 89</p>
            <p>✉️ contact@monagence.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 MonAgence - Tous droits réservés</p>
          <ul>
            <li>Nos honoraires</li>
            <li>Mentions Légales</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
