import React, { useState } from "react";
import "../assets/sass/Components/Carousel.scss";
import Arrow from "../assets/images/arrowLeft.svg";

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    if (pictures.length > 1) {
      setCurrentIndex((prevIndex) =>
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const goToPrevSlide = () => {
    if (pictures.length > 1) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
    }
  };

  if (!Array.isArray(pictures) || pictures.length === 0) {
    return <div className="carousel">Aucune image disponible</div>;
  }

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`Appartement - Image ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button onClick={goToPrevSlide} className="carousel-button prev-button">
        <img src={Arrow} alt="Button précédent" />
      </button>
      <button onClick={goToNextSlide} className="carousel-button next-button">
        <img src={Arrow} alt="Button suivant" />
      </button>
      {pictures.length > 1 && (
        <div className="carousel-counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Carousel;
