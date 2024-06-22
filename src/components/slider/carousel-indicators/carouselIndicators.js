import "./carouselIndicators.scss"

const CarouselIndicators = ({visible, itemsCount, activeSlider, setActiveSlider}) => {

  let listItems = [];
  for (let index = 0; index < itemsCount; index++) {
    listItems.push(
      <li
        key={index}
        className={activeSlider === index ? "active" : ""}
        onClick={() => {
          setActiveSlider(index);
        }}
      />
    );

  }
  return <ol 
  style={{
    display: visible ? "" : "none"
  }}
    className="carousell__indicators"
  
  >{listItems}</ol>;
};

export default CarouselIndicators;