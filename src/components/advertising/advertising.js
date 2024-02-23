import "./advertising.scss";

function Advertising() {
  return (
    <div className="advertising__container">
      <div className="advertising__inner">
        <img
          // src="http://placehold.it/1600x790"
          src={require("../../assets/images/pexels-roman-odintsov-6897341.jpg")}
          alt="advertising-img"
          className="advertising__img"
        />
      </div>
    </div>
  );
}

export default Advertising;
