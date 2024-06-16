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

  const sliderItem = useRef(null);

  const [offset, setOffset] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [activeSlider, setActiveSlider] = useState(1);
  useEffect(() => {
    setSliderWidth(sliderItem.current.clientWidth);
  }, []);

  useEffect(() => {
    const offset = sliderWidth * (activeSlider - 1);
    setOffset(offset);
  }, [activeSlider]);

  const nextSlide = () => {
    if (activeSlider !== itemsData.length) {
      setActiveSlider((prev) => prev + 1);
    }
  };

  const pervSlide = () => {
    if (offset !== 0) {
      setActiveSlider((prev) => prev - 1);
    }
  };

  return (
    <div
      className="slider__container"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
      }}
    >
      <div className="slider__inner">
        <div
          className="slider__wrapper"
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {itemsData.map((el, i) => {
            return (
              <div key={i} className="slider__item" ref={sliderItem}>
                {el}
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="slider__btn slider__btn_prev"
        onClick={pervSlide}
        disabled={activeSlider === 1 ? true : false}
      >
        &#8249;
      </button>
      <button
        className="slider__btn slider__btn_next"
        onClick={nextSlide}
        disabled={activeSlider === itemsData.length ? true : false}
      >
        &#8250;
      </button>

      <CarouselIndicators
        visible={indicators}
        itemsCount={itemsData.length}
        activeSlider={activeSlider}
        setActiveSlider={setActiveSlider}
      />
    </div>
  );
}

export default Slider;
