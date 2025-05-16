// src/components/AgencyStats.jsx
import React from "react";
import "../styles/AgencyStats.css";

const AgencyStats = ({
  location = "Concarneau, France",
  googleRating = 4.8,
  googleReviews = 120,
  facebookFollowers = 1500,
  instagramFollowers = 800,
}) => {
  return (
    <section className="agency-stats">
      <div className="container flex">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.8426115292323!2d-3.9126526999999993!3d47.9007315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810db0f9628b7b5%3A0xa731319ca0f9cf54!2sConcept%20Immo!5e0!3m2!1sfr!2sfr!4v1747142650680!5m2!1sfr!2sfr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Agence Map"
          ></iframe>
        </div>
        <div className="stats">
          <h2>Notre Agence</h2>
          <ul>
            <li>📍 Localisation : {location}</li>
            <li>
              ⭐️ Note Google : {googleRating} ({googleReviews} avis)
            </li>
            <li>👍 Followers Facebook : {facebookFollowers}</li>
            <li>📸 Followers Instagram : {instagramFollowers}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AgencyStats;
