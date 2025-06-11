import React, { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";
import "../styles/Ads.css";

const Ads = () => {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Toutes");
  const [selectedOfferType, setSelectedOfferType] = useState("Toutes");
  const [selectedAd, setSelectedAd] = useState(null); // annonce sélectionnée

  useEffect(() => {
    fetch("/concept-immo-concarneau.xml")
      .then((res) => res.text())
      .then((xmlText) => {
        const parser = new XMLParser({ ignoreAttributes: false });
        const json = parser.parse(xmlText);
        const adList = Array.isArray(json.hektor.ad)
          ? json.hektor.ad
          : [json.hektor.ad];
        setAds(adList);
        setFilteredAds(adList);
      });
  }, []);

  const getText = (field) =>
    typeof field === "object" && "#text" in field ? field["#text"] : field;

  const cities = ["Toutes", ...new Set(ads.map((ad) => getText(ad.ville)))];
  const offerTypes = [
    "Toutes",
    ...new Set(ads.map((ad) => getText(ad.type_offre))),
  ];

  const handleFilterChange = (city, offerType) => {
    let filtered = ads;

    if (city !== "Toutes") {
      filtered = filtered.filter((ad) => getText(ad.ville) === city);
    }

    if (offerType !== "Toutes") {
      filtered = filtered.filter((ad) => getText(ad.type_offre) === offerType);
    }

    setFilteredAds(filtered);
    setSelectedAd(null); // reset sélection si filtre change
  };

  const onCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    handleFilterChange(city, selectedOfferType);
  };

  const onOfferTypeChange = (e) => {
    const offerType = e.target.value;
    setSelectedOfferType(offerType);
    handleFilterChange(selectedCity, offerType);
  };

  const onAdClick = (ad) => {
    setSelectedAd(ad);
  };

  const closeModal = () => {
    setSelectedAd(null);
  };

  return (
    <div className="ads-container">
      <h1 className="ads-title">Nos annonces immobilières</h1>

      <div className="filter-bar">
        <label htmlFor="city-filter">Ville :</label>
        <select id="city-filter" value={selectedCity} onChange={onCityChange}>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>

        <label htmlFor="offer-filter">Type d'offre :</label>
        <select
          id="offer-filter"
          value={selectedOfferType}
          onChange={onOfferTypeChange}
        >
          {offerTypes.map((offer, index) => (
            <option key={index} value={offer}>
              {offer}
            </option>
          ))}
        </select>
      </div>

      <div className="ads-list">
        {filteredAds.map((ad, index) => (
          <div
            key={index}
            className="ad-card"
            onClick={() => onAdClick(ad)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={
                Array.isArray(ad.images?.image)
                  ? ad.images.image[0]
                  : ad.images?.image
              }
              alt="annonce"
              className="ad-image"
            />
            <h2 className="ad-title">{getText(ad.titre)}</h2>
            <p className="ad-info">
              {getText(ad.ville)} - {getText(ad.type_bien)} -{" "}
              {getText(ad.surface_habitable)} m²
            </p>
            <p className="ad-price">{getText(ad.prix)} €</p>
            <p className="ad-info">
              <strong>Type d'offre :</strong> {getText(ad.type_offre)}
            </p>
          </div>
        ))}
      </div>

      {/* Modale popup */}
      {selectedAd && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // empêche la fermeture quand on clique dans la modale
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "1200px",
              width: "90%",
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              aria-label="Fermer la modale"
            >
              &times;
            </button>

            <h2>{getText(selectedAd.titre)}</h2>
            <p>
              <strong>Ville :</strong> {getText(selectedAd.ville)}
            </p>
            <p>
              <strong>Type de bien :</strong> {getText(selectedAd.type_bien)}
            </p>
            <p>
              <strong>Surface habitable :</strong>{" "}
              {getText(selectedAd.surface_habitable)} m²
            </p>
            <p>
              <strong>Prix :</strong> {getText(selectedAd.prix)} €
            </p>
            <p>
              <strong>Type d'offre :</strong> {getText(selectedAd.type_offre)}
            </p>

            {/* Images */}
            {selectedAd.images?.image && (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "1rem",
                  flexWrap: "wrap",
                }}
              >
                {Array.isArray(selectedAd.images.image) ? (
                  selectedAd.images.image.map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={`image ${i + 1}`}
                      style={{ width: "150px", borderRadius: "4px" }}
                    />
                  ))
                ) : (
                  <img
                    src={selectedAd.images.image}
                    alt="image unique"
                    style={{ width: "150px", borderRadius: "4px" }}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ads;
