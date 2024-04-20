import SocialLinks from "../social-links/social-links";

import "./advertising.scss";

function Advertising() {
  return (
    <div className="advertising__container">
      <ol className="carousell__indicators">
        <li className="active" data-slide-to="0"></li>
        <li data-slide-to="1"></li>
        <li data-slide-to="2"></li>
      </ol>
      <div className="carousell__inner">
        <div className="carousell__slides">
          <div className="carousell__item">
            <div className="advertising__info">
              <h2 className="main-title advertising__title">
                Pyszne babeczki wielkanocne
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
                Pyszne babeczki wielkanocne
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
                Pyszne babeczki wielkanocne
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
      <buton className="btn btn_arrow carousell__btn carousell__btn_left">&#8249;</buton>
      <buton className="btn btn_arrow carousell__btn carousell__btn_right">&#8250;</buton>
    </div>
  );
}

export default Advertising;
