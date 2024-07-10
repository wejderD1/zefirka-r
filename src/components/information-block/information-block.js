import ".//information-block.scss";

const InformationBlock = ({
  title,
  description,
  classOther,
  img,
  children,
}) => {
  return (
    <div className={`information ${classOther ? classOther : ""}`}>
      <img
        src={require(`../../assets/images/${img}.jpg`)} //относительный путь, работает только в папке components/component
        alt="information-img"
        className="information__photo"
      />
      <div className="information__description">
        <h1 className="subtitle subtitle_bottom-line">{title}</h1>
        <div>{children}</div>
        <h2 className="main-text information__text">{description}</h2>
      </div>
    </div>
  );
};

export default InformationBlock;
