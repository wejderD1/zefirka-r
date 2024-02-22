import "./advertising.scss";

function Advertising() {
  return (
    <div className="advertising__container">
      <div className="advertising__inner">
        <img
          src={require("../../assets/images/pexels-roman-odintsov-6897341.webp")}
          alt="advertising-img"
          className="advertising__img"
        />
      </div>
    </div>
  );
}

export default Advertising;
