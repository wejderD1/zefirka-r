import { useState, useRef, useEffect } from "react";
import "./slider.scss";

function  Slider({ itemsData }) {

  const sliderItem = useRef(null);
  
  const [offset, setOffset] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [slidersCount, setSlidersCount] = useState(1);

  useEffect(() => {
    setSliderWidth(sliderItem.current.clientWidth);
  }, []);
  
  const nextSlide = () => {
    if (slidersCount !== itemsData.length) {
      setOffset(offset + sliderWidth);      
      setSlidersCount(prev => prev + 1);
    }

  };

  const pervSlide = () => {
    if (offset !== 0) {
      setOffset(offset - sliderWidth);
      setSlidersCount(prev => prev - 1);
    }
  };

  return (
    <div className="slider__container">
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
      <button className="slider__btn slider__btn_prev" onClick={pervSlide}>
        &#8249;
      </button>
      <button className="slider__btn slider__btn_next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}

export default Slider;
