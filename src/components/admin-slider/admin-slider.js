import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./admin-slider.scss";

function AdminSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftHandle = () =>
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);

  const rightHandle = () =>
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="slider-container">
      <button
        className="btn carousel__btn carousel__btn_left"
        onClick={leftHandle}
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
      </button>
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {slide}
          </div>
        ))}
      </div>

      <button
        className="btn carousel__btn carousel__btn_right"
        onClick={rightHandle}
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
  );
}

export default AdminSlider;
