// src/components/AerialVideoHighlight.jsx
import React from "react";
import "../styles/AerialVideoHighlight.css";

const AerialVideoHighlight = ({ videoUrl, title, description }) => {
  return (
    <section className="aerial-video">
      <h2>Découvrez notre dernière vidéo</h2>
      <div className="video-container">
        <iframe
          src={videoUrl}
          title={title}
          width="584"
          height="330"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-overlay">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="btn-primary">Voir les détails</button>
      </div>
    </section>
  );
};

export default AerialVideoHighlight;
