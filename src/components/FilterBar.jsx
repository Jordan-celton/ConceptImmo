// src/components/FilterBar.jsx
import React, { useState } from "react";
import "../styles/FilterBar.css";

const FilterBar = ({ onFilter }) => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleFilter = () => {
    onFilter({ location, propertyType, priceRange });
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Ville, quartier..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      >
        <option value="">Type de bien</option>
        <option value="appartement">Appartement</option>
        <option value="maison">Maison</option>
        <option value="commerce">Commerce</option>
      </select>
      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <option value="">Budget</option>
        <option value="0-500000">0 - 500 000 €</option>
        <option value="500000-1000000">500 000 - 1 000 000 €</option>
        <option value="1000000-5000000">1 000 000 - 5 000 000 €</option>
      </select>
      <button onClick={handleFilter}>Rechercher</button>
    </div>
  );
};

export default FilterBar;
