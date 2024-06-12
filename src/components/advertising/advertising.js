import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import SocialLinks from "../social-links/social-links";

import { useHttp } from "../../services/http.hooks";
import { advertisingFetched } from "../../actions";
import "./advertising.scss";

function Advertising() {
  const offsetWidth = useRef(null);
  const slidesContainer = useRef(null);
  const scrollWidth = useRef(null);

  const [offset, setOffset] = useState(0);
  const [slidesIndex, setSlidesIndex] = useState(1);
  const [slidesLength, setSlidesLength] = useState(0);

  const { advertisingsList } = useSelector((state) => state.advertisingReducer);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    request("http://localhost:5000/advertising")
      .then((data) => {
        dispatch(advertisingFetched(data))
  })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (slidesContainer.current) {
      offsetWidth.current = slidesContainer.current.children[0].clientWidth; //children width
      scrollWidth.current = slidesContainer.current.scrollWidth; //parent lendth
      setSlidesLength(slidesContainer.current.childElementCount);
    }
  }, [slidesLength]);

  useEffect(() => {
    const offset = offsetWidth.current * (slidesIndex - 1);
    setOffset(offset);
  }, [slidesIndex]);

  const rigthBtnHandler = () => {
    if (offset + offsetWidth.current < scrollWidth.current) {
      setSlidesIndex((prev) => (prev += 1));
    }
  };

  const leftBtnHandler = () => {
    if (offset !== 0) {
      setSlidesIndex((prev) => (prev -= 1));
    }
  };

  const advertisingsItems =
    // advertisingList.length > 0 &&
    advertisingsList.map((el, i) => {
      return (
        <div key={i} className="carousell__item">
          <div className="advertising__info">
            <h2 className="main-title advertising__title">{el.aTitle}</h2>
            <p className="advertising__description">{el.aDesc}</p>
            <h5 className="advertising__note">{el.aNote}</h5>
          </div>
          <img
            className="advertising__img"
            // src="http://placehold.it/1600x790"
            src={
              el.aImg
                ? require(`../../assets/images/${el.aImg}`)
                : `http://placehold.it/350x350`
            }
            alt="aPicturec"
          />
        </div>
      );
    });

  const CarouselIndicators = () => {
    let listItems = [];
    for (let index = 0; index < slidesLength; index++) {
      listItems.push(
        <li
          key={index}
          className={slidesIndex === index + 1 ? "active" : ""}
          onClick={() => {
            setSlidesIndex(index + 1);
          }}
        ></li>
      );
    }

    return <ol className="carousell__indicators">{listItems}</ol>;
  };

  const content = (
    <Fragment>
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
              <p className="advertising__description">
                Czekoladowe jajka, desery z marshmallow, wielkanocne babki i
                panetone będą doskonałym poczęstunkiem na Wielkanoc.
              </p>
              <h5 className="advertising__note">
                Zamówienia są przyjmowane do 24 marca.
              </h5>
            </div>
            <img
              className="advertising__img"
              // src="http://placehold.it/1600x790"
              src={require("../../assets/images/advertising_collage.jpg")}
              alt="картинка рекламы"
            />
          </div>
          {advertisingsItems}
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
    </Fragment>
  );

  return <div className="advertising__container">{content}</div>;
}

export default Advertising;
