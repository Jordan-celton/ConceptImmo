import React, { useEffect, useState } from "react";
import { XMLParser } from "fast-xml-parser";
import "../styles/Ads.css";

const Ads = () => {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Toutes");
  const [selectedOfferType, setSelectedOfferType] = useState("Toutes");

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

  // Liste unique des villes pour le filtre
  const cities = ["Toutes", ...new Set(ads.map((ad) => getText(ad.ville)))];

  // Liste unique des types d'offre (vente, location, etc.)
  const offerTypes = [
    "Toutes",
    ...new Set(ads.map((ad) => getText(ad.type_offre))),
  ];

  // Filtre les annonces selon ville et type d'offre
  const handleFilterChange = (city, offerType) => {
    let filtered = ads;

    if (city !== "Toutes") {
      filtered = filtered.filter((ad) => getText(ad.ville) === city);
    }

    if (offerType !== "Toutes") {
      filtered = filtered.filter((ad) => getText(ad.type_offre) === offerType);
    }

    setFilteredAds(filtered);
  };

  // Gestionnaire changement ville
  const onCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    handleFilterChange(city, selectedOfferType);
  };

  // Gestionnaire changement type d'offre
  const onOfferTypeChange = (e) => {
    const offerType = e.target.value;
    setSelectedOfferType(offerType);
    handleFilterChange(selectedCity, offerType);
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
          <div key={index} className="ad-card">
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
    </div>
  );
};

export default Ads;
