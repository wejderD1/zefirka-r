import { useEffect, useRef, useState } from "react";
import SocialLinks from "../social-links/social-links";

import "./advertising.scss";

function Advertising() {
  const offsetWidth = useRef(null);
  const slidesContainer = useRef(null);
  const scrollWidth = useRef(null);

  const [offset, setOffset] = useState(0);
  const [slidesIndex, setSlidesIndex] = useState(1);
  const [slidesLength, setSlidesLength] = useState(0);
  // const [scrollWidth, setScrollWidth]

  //створити стейт з індикаторами (кількість дочірніх елементів в контейнері)
  // змінювати клас активності в індикаторах

  useEffect(() => {
    offsetWidth.current = slidesContainer.current.children[0].clientWidth;
    scrollWidth.current = slidesContainer.current.scrollWidth;
    setSlidesLength(slidesContainer.current.childElementCount);
    // console.dir(slidesContainer.current)
  }, [offset]);

  const rigthBtnHandler = () => {
    if (offset + offsetWidth.current < scrollWidth.current) {
      setOffset((prev) => {
        const offset = prev + offsetWidth.current;
        return offset;
      });
      setSlidesIndex((prev) => (prev += 1));
    }
  };

  const leftBtnHandler = () => {
    if (offset !== 0) {
      setOffset((prev) => {
        const offset = prev - offsetWidth.current;
        return offset;
      });
      setSlidesIndex((prev) => (prev -= 1));
    }
  };

  const CarouselIndicators = ({ slidesLenght }) => {
    let listItems = [];
    for (let index = 0; index < slidesLength; index++) {
      listItems.push(
        <li
          key={index}
          className={slidesIndex === index + 1 ? "active" : ""}
        ></li>
      );
    }

    return <ol className="carousell__indicators">{listItems}</ol>;
  };

  return (
    <div className="advertising__container">
      <CarouselIndicators />
      <div className="carousell__inner">
        <div
          className="carousell__slides"
          ref={slidesContainer}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          <div className="carousell__item">
            <div className="advertising__info">
              <h2 className="main-title advertising__title">
                1Pyszne babeczki wielkanocne
              </h2>
              <p className="information__description advertising__description">
                Czekoladowe jajka, desery z marshmallow, wielkanocne babki i
                panetone będą doskonałym poczęstunkiem na Wielkanoc.
                <span>Zamówienia są przyjmowane do 24 marca.</span>
              </p>
              <SocialLinks />
            </div>
            <img
              // src="http://placehold.it/1600x790"
              src={require("../../assets/images/advertising_collage.jpg")}
              alt="картинка рекламы"
              className="advertising__img img-2"
            />
          </div>
          <div className="carousell__item">
            <div className="advertising__info">
              <h2 className="main-title advertising__title">
                2Pyszne babeczki wielkanocne
              </h2>
              <p className="information__description advertising__description">
                Czekoladowe jajka, desery z marshmallow, wielkanocne babki i
                panetone będą doskonałym poczęstunkiem na Wielkanoc.
                <span>Zamówienia są przyjmowane do 24 marca.</span>
              </p>
              <SocialLinks />
            </div>
            <img
              // src="http://placehold.it/1600x790"
              src={require("../../assets/images/advertising_collage.jpg")}
              alt="картинка рекламы"
              className="advertising__img img-2"
            />
          </div>
          <div className="carousell__item">
            <div className="advertising__info">
              <h2 className="main-title advertising__title">
                3Pyszne babeczki wielkanocne
              </h2>
              <p className="information__description advertising__description">
                Czekoladowe jajka, desery z marshmallow, wielkanocne babki i
                panetone będą doskonałym poczęstunkiem na Wielkanoc.
                <span>Zamówienia są przyjmowane do 24 marca.</span>
              </p>
              <SocialLinks />
            </div>
            <img
              // src="http://placehold.it/1600x790"
              src={require("../../assets/images/advertising_collage.jpg")}
              alt="картинка рекламы"
              className="advertising__img img-2"
            />
          </div>
        </div>
      </div>
      <button
        className="btn btn_arrow carousell__btn carousell__btn_left"
        onClick={leftBtnHandler}
        style={
          offset === 0 ? { visibility: "hidden" } : { visibility: "visible" }
        }
      >
        &#8249;
      </button>
      <button
        className="btn btn_arrow carousell__btn carousell__btn_right"
        onClick={rigthBtnHandler}
        style={
          offset + offsetWidth.current < scrollWidth.current
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        &#8250;
      </button>
    </div>
  );
}

export default Advertising;
