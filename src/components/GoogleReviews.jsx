// src/components/GoogleReviews.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/GoogleReviews.css";

const GoogleReviews = () => {
  // Tableau des avis
  const reviews = [
    {
      author_name: "Alice Dupont",
      text: "Service professionnel et équipe sympathique !",
      rating: 5,
    },
    {
      author_name: "Jean Martin",
      text: "J'ai trouvé mon appartement idéal grâce à eux !",
      rating: 4,
    },
    {
      author_name: "Marie Legrand",
      text: "Une expérience client exceptionnelle !",
      rating: 5,
    },
    {
      author_name: "Pierre Durand",
      text: "Une équipe à l'écoute et très réactive.",
      rating: 4,
    },
    {
      author_name: "Sophie Martin",
      text: "Je recommande vivement cette agence !",
      rating: 5,
    },
  ];

  return (
    <section className="google-reviews">
      <h2>Ce que disent nos clients</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="review-slide">
            <div className="review">
              <h3>{review.author_name}</h3>
              <p>"{review.text}"</p>
              <span>⭐️ {review.rating} / 5</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GoogleReviews;
