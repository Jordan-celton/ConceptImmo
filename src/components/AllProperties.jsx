import React from "react";
import "../styles/AllProperties.css";

import house from "../assets/home_photo.webp";
import commerce from "../assets/clothes-1839935_1920.jpg";
import apartment from "../assets/architecture-5339245_1920.jpg";
import viager from "../assets/village-7258991_1920.jpg";

const AllProperties = () => {
  // Liste complète des propriétés
  const properties = [
    {
      image: house,
      title: "Maison",
      price: "500 000 €",
      location: "Concarneau, France",
      types: ["Achat"],
    },
    {
      image: apartment,
      title: "Appartement",
      price: "150 000 €",
      location: "Quimper, France",
      types: ["Vente"],
    },
    {
      image: commerce,
      title: "Commerce",
      price: "500 000 €",
      location: "Ile tudy, France",
      types: ["Vente"],
    },
    {
      image: viager,
      title: "Maison de Campagne",
      price: "60 000 €",
      location: "Plomelin, France",
      types: ["Viager"],
    },
  ];

  return (
    <section className="all-properties">
      <h2>Toutes les Propriétés</h2>
      <div className="all-properties-grid">
        {properties.map((property, index) => (
          <div key={index} className="all-property-card">
            <img src={property.image} alt={property.title} />
            <div className="all-property-details">
              <h3>{property.title}</h3>
              <p className="all-price">{property.price}</p>
              <p className="all-location">{property.location}</p>
              <ul className="all-property-types">
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

export default AllProperties;
