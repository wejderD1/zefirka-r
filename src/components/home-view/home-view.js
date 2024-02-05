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
            <Link className="btn" to="/">
              nasza produkcja
            </Link>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about__inner">
            <div className="information">
              <img
                src={require("../../assets/images/p_O.jpg")}
                alt="information-img"
                className="information__photo"
              />
              <div className="information__description">
                <h1 className="subtitle subtitle_bottom-line">
                  Tylko naturalne komponenty
                </h1>
                <div className="main-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laudantium quia voluptatem possimus beatae dolorum quasi sunt
                  nihil adipisci numquam, similique repellendus non accusantium
                  ea quod delectus libero deserunt laboriosam soluta.
                </div>
              </div>
            </div>

            <div className="partners">
              <div className="partners__inner">
                <h1 className="subtitle subtitle_bottom-line">
                  Nasze partnery
                </h1>
                <div className="logo-wrapper">
                  <a
                    href="https://www.callebaut.com/en"
                    className="partners__item"
                  >
                    <img
                      src={require(`../../assets/images/Callebaut_logo.png`)}
                      alt="partners-logo"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="information information_reverse">
              <img
                src={require("../../assets/images/p_O.jpg")}
                alt="information-img"
                className="information__photo"
              />
              <div className="information__description">
                <h1 className="subtitle subtitle_bottom-line">
                  Tylko naturalne komponenty
                </h1>
                <div className="main-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laudantium quia voluptatem possimus beatae dolorum quasi sunt
                  nihil adipisci numquam, similique repellendus non accusantium
                  ea quod delectus libero deserunt laboriosam soluta.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
