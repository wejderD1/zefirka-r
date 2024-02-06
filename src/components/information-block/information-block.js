import ".//information-block.scss";

const InformationBlock = ({title, description, classOther, img}) => {
  return ( 
    <div className={`information ${classOther}`}>
              <img
                src={require(`../../assets/images/${img}.jpg`)}
                alt="information-img"
                className="information__photo"
              />
              <div className="information__description">
                <h1 className="subtitle subtitle_bottom-line">
                  {title}
                </h1>
                <div className="main-text">
                  {description}
                </div>
              </div>
            </div>
   );
}
 
export default InformationBlock;