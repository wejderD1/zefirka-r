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
      <div className="about">
        <div className="container">
          <div className="about__inner">
            {/* INFORMATION */}
            <InformationBlock
              title="wyjątkowy design"
              description="Indywidualne dekoracje i ozdoby dla każdego deseru. Osobiste podejście do dekorowania tortów i słodkich przysmaków."
            />
            <InformationBlock
              classOther="information_reverse"
              title="Tylko naturalne komponenty"
              description="
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi amet accusamus, ipsa totam dolorem nesciunt ipsum ducimus at dolorum, veniam praesentium maxime esse, non possimus saepe! Quos facere maiores vitae!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
