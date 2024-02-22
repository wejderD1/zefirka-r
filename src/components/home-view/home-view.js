import Advertising from "../advertising/advertising";
import InformationBlock from "../information-block/information-block";
import "./home-view.scss";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="home pt-115px">
      <div className="container">
        <div className="home__inner">
          <div className="description">
            <div className="block-inner">
              <h1 className="subtitle subtitle_bottom-line">
                domowe słodycze i wypieki
              </h1>
              <h1 className="main-title">Zefirki Wiollet</h1>
            </div>
            <Link className="btn" to="/produkty">
              nasza produkcja
            </Link>
          </div>
        </div>
      </div>
      <Advertising />
      <div className="about">
        <div className="container">
          <div className="about__inner">
            {/* INFORMATION */}
            <InformationBlock
              img="20220914_141213"
              title="wyjątkowy design"
              description="Indywidualne dekoracje i ozdoby dla każdego deseru. Osobiste podejście do dekorowania tortów i słodkich przysmaków."
            />
            <InformationBlock
              img="20220308_193827"
              classOther="information_reverse"
              title="Nasza magia"
              description="Unikalne torty na zamówienie na wyjątkowe okazje. Ekskluzywne desery na przytulne wieczory i święta. Zestawy na uroczystości i wydarzenia korporacyjne. Słodkie komplementy dla bliskich"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
