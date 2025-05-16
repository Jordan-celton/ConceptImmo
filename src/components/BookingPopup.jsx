// src/components/BookingPopup.jsx
import React, { useState } from "react";
import "../styles/BookingPopup.css";

const BookingPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Votre demande de visite a bien été envoyée !");
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      property: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="booking-popup-overlay">
      <div className="booking-popup">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Planifier une visite</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Votre numéro de téléphone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="property"
            value={formData.property}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez une propriété</option>
            <option value="Villa Moderne">Appartement</option>
            <option value="Appartement de Luxe">Maison</option>
            <option value="Penthouse">Commerce</option>
            <option value="Viager">Viager</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message (facultatif)"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default BookingPopup;
