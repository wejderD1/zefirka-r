import { useEffect, useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./carousel.scss";

function Carousel({ children }) {
  library.add(faArrowLeft, faArrowRight);
  const [items, setItems ] = useState([])

  useEffect(() => {
    const items = children.map((el, i) => (
      <div className="carousel__item" key={i}>
        {el}
      </div>
    ));
    setItems(items);
  }, [children])

  function leftHandle() {
    console.log("left");
  }

  function rightHandle() {
    console.log("right");
  }

  return (
    <div className="carousel__wrapper">
      <button 
        className="carousel__btn carousel__btn_left"
        onClick={leftHandle}>
        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
      </button>
      <div className="carousel__inner">
        <div className="carousel__items-container">
          {items}
        </div>
      </div>
      <button 
        className="carousel__btn carousel__btn_right"
        onClick={rightHandle}>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
  );
}

export default Carousel;
