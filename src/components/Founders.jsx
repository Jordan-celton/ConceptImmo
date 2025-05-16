// src/components/Founders.jsx
import React from "react";
import "../styles/Founders.css";

// Import direct des images
import chrisPhoto from "../assets/chris-gourm.png";
import thomasPhoto from "../assets/thomas-bonoche-2.jpg";

const Founders = () => {
  const founders = [
    {
      name: "Christophe Gourmelon",
      role: "CEO",
      bio: "Alice a plus de 10 ans d'expérience dans le secteur immobilier et a fondé MonAgence en 2015.",
      photo: chrisPhoto,
    },
    {
      name: "Thomas Binoche",
      role: "Directeur des Ventes",
      bio: "Jean est un expert en gestion de projets immobiliers et dirige les ventes de l'agence.",
      photo: thomasPhoto,
    },
  ];

  return (
    <section className="founders">
      <h2>Les Fondateurs de Notre Agence</h2>
      <div className="founders-grid">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img
              src={founder.photo}
              alt={founder.name}
              className="founder-photo"
            />
            <h3>{founder.name}</h3>
            <p className="role">{founder.role}</p>
            <p className="bio">{founder.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
