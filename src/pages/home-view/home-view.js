import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import InformationBlock from "../../components/information-block/information-block";
import Slider from "../../components/slider/slider";

import "./home-view.scss";
import bkg from "../../assets/images/bkg_advertising.jpg";
import { useHttp } from "../../services/http.hooks";
import { fetchedAd } from "../../actions/advertisingAction";

import { Link } from "react-router-dom";

const HomeView = () => {
  const [loading, setLoading] = useState(true);

  const { itemsList: advertisingsList } = useSelector(
    (state) => state.universalReducer.ads
  );
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    request("http://localhost:5000/advertising")
      .then((data) => {
        dispatch(fetchedAd(data));
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ paddingTop: "200px", height: "100vh" }}>Loading...</div>
    );
  }

  const EmptyAds = () => {
    return (
      <div className="advertising__container">
        <div className="advertising__info">
          <h2 className="main-title advertising__title">Nie ma ogłoszeń</h2>
          <p className="advertising__description">
            w dannym momencie nie ma ogłoszeń
          </p>
          <h5 className="advertising__note">
            brak
          </h5>
        </div>
        <img
          className="advertising__img"
          src={require(`../../assets/images/empty_ads.jpg`)}
          alt="advertising pictures"
        />
      </div>
    );
  };

  const advertisingContent =
    advertisingsList.length === 0
      ? [<EmptyAds />]
      : advertisingsList.map((el, i) => {
          return (
            <div className="advertising__container">
              <div className="advertising__info">
                <h2 className="main-title advertising__title">{el.aTitle}</h2>
                <p className="advertising__description">{el.aDesc}</p>
                <h5 className="advertising__note">{el.aNote}</h5>
              </div>
              <img
                className="advertising__img"
                src={
                  el.aImg
                    ? require(`../../assets/images/ads-img/${el.aImg}`)
                    : `http://placehold.it/150`
                }
                alt="advertising pictures"
              />
            </div>
          );
        });

  return (
    <div className="home page">
      <div className="container">
        <div className="home__inner page__inner">
          <div className="description">
            <div className="block-inner">
              <h1 className="subtitle home__title_white">
                domowe słodycze i wypieki
              </h1>
              <h1 className="main-title shadow_white">
                Desery z miłością od Valentyny
              </h1>
            </div>
            <Link className="btn btn_main" to="/produkty">
              nasza produkcja
            </Link>
          </div>
        </div>
      </div>
      <Slider
        itemsData={advertisingContent}
        option={{
          indicators: true,
          backgroundImage: bkg,
        }}
      />
      {/* <Advertising /> */}
      <div className="about">
        <div className="container">
          <InformationBlock
            img="omnie"
            title="O mnie"
            description={`Witam! Nazywam się VALENTYNA i jestem cukiernikiem z ponad 10-letnim doświadczeniem. Ukończyłam kursy przygotowywania tortów musowych, tortów biszkoptowych, miodowników, tortów 'Napoleon' motchi, panettone, rolad i wielu innych wykwintnych deserów. Cukiernictwo to moja pasja i dążę do tego, aby zachwycać Was moimi smacznymi i pięknymi dziełami sztuki. Każdy tort i deser, który tworzę, powstaje z miłością i dbałością o szczegóły, aby przewyższać Wasze oczekiwania i dawać niezapomniane chwile słodkiej rozkoszy.`}
          >
            <h5 className="additional-title">
              mam na imię <span style={{ fontWeight: "600" }}>Valentyna</span>
            </h5>
          </InformationBlock>
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
  );
};

export default HomeView;
