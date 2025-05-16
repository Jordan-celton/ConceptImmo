import React, { useState } from "react";
import AerialVideoHighlight from "../components/AerialVideoHighlight";
import GoogleReviews from "../components/GoogleReviews";
import Founders from "../components/Founders";
import AgencyStats from "../components/AgencyStats";
import ContactForm from "../components/ContactForm";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";
import HeroBanner from "../components/HeroBanner";
import BookingPopup from "../components/BookingPopup";

const HomePage = () => {
  const handleFilter = (filters) => {
    console.log("Filtres appliqués :", filters);
  };

  const [showPopup, setShowPopup] = useState(false);

  const HANDLE_FILTER = (filters) => {
    console.log("Filtres appliqués :", filters);
  };

  return (
    <div className="container">
      <HeroBanner />
      <FilterBar onFilter={handleFilter} />
      <div className="property-grid">
        <PropertyCard />
      </div>
      {/* CTA Button */}
      <div className="cta-section">
        <button className="cta-button" onClick={() => setShowPopup(true)}>
          Planifier une visite
        </button>
      </div>

      {/* Autres sections */}
      <AerialVideoHighlight
        videoUrl="https://www.youtube.com/embed/pHDRIX-OP2o"
        title="#445 - Maison à vendre à SAINT-ÉVARZEC !"
        description="Découvrez cette magnifique maison à Saint-Évarzec."
      />
      <GoogleReviews />
      <Founders />
      <AgencyStats />
      <ContactForm />

      {showPopup && <BookingPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default HomePage;
