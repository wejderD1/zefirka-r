import AboutMe from "../../components/about-me/about-me";
import Advertising from "../../components/advertising/advertising";
import InformationBlock from "../../components/information-block/information-block";
import "./home-view.scss";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__inner">
          <div className="description">
            <div className="block-inner">
              <h1 className="subtitle subtitle_bottom-line home-title_white">
                domowe słodycze i wypieki
              </h1>
              <h1 className="main-title shadow_white">Desery z miłością od Valentyny</h1>
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
            {/* INFORMATION & ABOUT ME*/}
            <AboutMe />
            <InformationBlock
              img="20220308_193827"
              classOther="information_reverse"
              title="Nasza magia"
              description="Unikalne torty na zamówienie na wyjątkowe okazje. Ekskluzywne desery na przytulne wieczory i święta. Zestawy na uroczystości i wydarzenia korporacyjne. Słodkie komplementy dla bliskich"
            />
            <InformationBlock
              img="20220914_141213"
              title="wyjątkowy design"
              description="Indywidualne dekoracje i ozdoby dla każdego deseru. Osobiste podejście do dekorowania tortów i słodkich przysmaków."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
