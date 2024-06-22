import { useState, useRef, useEffect } from "react";
import CarouselIndicators from "./carousel-indicators/carouselIndicators";

import "./slider.scss";

//нужно продумать как добавлять или убирать картинку

/**
 *
 * @param itemsData Array - slider items data }
 * @param option
 *  - indicators : Boolean - slider indicators visible
 *  - backgroundImage : String - slider background image
 *  - image: Boolean - add image into advertising
 * @returns Slider components
 */

function Slider({ itemsData, option = null }) {
  const { indicators, backgroundImage } = option;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(0 % 3, 1 % 3, 2 % 3, 3 % 3);
  }, []);

  const pervSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemsData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsData.length);
    console.log(currentIndex);
  };

  return (
    <div
      className="slider__container"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <div
        className="slider__wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {itemsData.map((el, index) => {
          return (
            <div key={index} className="slider__item">
              {el}
            </div>
          );
        })}
      </div>
      <button
        className="slider__btn slider__btn_prev"
        onClick={pervSlide}
        disabled={currentIndex === 0 ? true : false}
      >
        &#8249;
      </button>
      <button
        className="slider__btn slider__btn_next"
        onClick={nextSlide}
        disabled={currentIndex === itemsData.length - 1 ? true : false}
      >
        &#8250;
      </button>

      <CarouselIndicators
        visible={indicators}
        itemsCount={itemsData.length}
        activeSlider={currentIndex}
        setActiveSlider={setCurrentIndex}
      />
    </div>
  );
}

export default Slider;
