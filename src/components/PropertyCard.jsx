// src/components/PropertyCard.jsx
import React from "react";
import "../styles/PropertyCard.css";

import house from "../assets/home_photo.webp";
import commerce from "../assets/clothes-1839935_1920.jpg";
import apartment from "../assets/architecture-5339245_1920.jpg";
import viager from "../assets/village-7258991_1920.jpg";

const PropertyCard = () => {
  // Tableau des propriétés
  const properties = [
    {
      image: house,
      title: "Maison",
      types: ["Location", "Vente", "Viager", "Achat"],
    },
    {
      image: apartment,
      title: "Appartement",
      types: ["Vente", "Achat", "Location", "Viager"],
    },
    {
      image: commerce,
      title: "Commerce",
      types: ["Achat", "Vente"],
    },
    {
      image: viager,
      title: "Viager",
      types: ["Achat", "Vente"],
    },
    {
      image: commerce,
      title: "Commerce",
      types: ["Achat", "Vente"],
    },
  ];

  return (
    <section className="property-section">
      <div className="property-grid">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <img src={property.image} alt={property.title} />
            <div className="property-details">
              <h3>{property.title}</h3>
              <ul className="property-types">
                {property.types.map((type, i) => (
                  <li key={i}>{type}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCard;
