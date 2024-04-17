import { useEffect, useRef, useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./carousel.scss";

function Carousel({ children }) {
  library.add(faArrowLeft, faArrowRight);
  const [items, setItems] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setItems(children[activeSlide]);
  }, [activeSlide]);

  function leftHandle() {
    if (activeSlide !== 0) {
      setActiveSlide((prevCount) => (prevCount -= 1));
    }
  }

  function rightHandle() {
    if (activeSlide !== children.length - 1) {
      setActiveSlide((prevCount) => (prevCount += 1));
    }
  }

  return (
    <div className="carousel__wrapper">
      <button className="carousel__btn carousel__btn_left" onClick={leftHandle}>
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
      </button>
      <div className="carousel__items-container">{items}</div>
      <button
        className="carousel__btn carousel__btn_right"
        onClick={rightHandle}
      >
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
  );
}

export default Carousel;
