import { useEffect, useRef, useState } from "react";
import SocialLinks from "../social-links/social-links";

import "./advertising.scss";

function Advertising() {
  const slidesContainer = useRef(null);
  const [offset, setOffset] = useState(0);
  const offsetWidth =useRef(null);

  //створити стейт з індикаторами (кількість дочірніх елементів в контейнері)
  // змінювати клас активності в індикаторах

  useEffect(() => {
    offsetWidth.current = slidesContainer.current.children[0].clientWidth;
    console.log(offsetWidth);
  }, [offset]);

  const rigthBtnHandler = () => {
    const scrollWidth = slidesContainer.current.scrollWidth;
    if (offset + offsetWidth.current < scrollWidth) {
      setOffset((prev) => {
        const offset = prev + offsetWidth.current;
        return offset;
      });
    }
  };

  const leftBtnHandler = () => {
    if (offset !== 0) {
      setOffset((prev) => {
        const offset = prev - offsetWidth.current;
        return offset;
      });
    }
  };

  return (
    <div className="advertising__container">
      <ol className="carousell__indicators">
        <li className="active" data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
      </ol>
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
      >
        &#8249;
      </button>
      <button
        className="btn btn_arrow carousell__btn carousell__btn_right"
        onClick={rigthBtnHandler}
      >
        &#8250;
      </button>
    </div>
  );
}

export default Advertising;
