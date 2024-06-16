import "./carouselIndicators.scss"

const CarouselIndicators = ({itemsCount, activeSlider, setActiveSlider}) => {

  let listItems = [];
  for (let index = 0; index < itemsCount; index++) {
    listItems.push(
      <li
        key={index}
        className={activeSlider === index + 1 ? "active" : ""}
        onClick={() => {
          setActiveSlider(index + 1);
        }}
      />
    );

  }
console.log(listItems);
  return <ol className="carousell__indicators">{listItems}</ol>;
};

export default CarouselIndicators;