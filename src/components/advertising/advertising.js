import SocialLinks from "../social-links/social-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./advertising.scss";

function Advertising() {
  return (
    <div className="advertising__container">
      <buton className="btn btn_arrow btn_arrow-left">&#8249;</buton>
      <div className="advertising__inner">
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
      <buton className="btn btn_arrow btn_arrow-right">&#8250;</buton>
    </div>
  );
}

export default Advertising;
