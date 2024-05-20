import { useEffect, useState } from "react";

const withCarousel = (CarouselItem, ChildrenComponent, title) => {
  return (props) => {
    const [activeSlide, setActiveSlide] = useState(1);

    return (
      <CarouselItem
        {...props}
        activeSlide={activeSlide}
        title={title}
        childrenComponent={ChildrenComponent}
      />
    );
  };
};

export default withCarousel;

/*
<div className="item__container" ref={itemContainer}>
                  <h2 className="main-text">
                    Utwórz nową pozycję produktu. Wstaw tytuł, opis i cenę
                    produktu
                  </h2>
                  <div className="categories__wrapper">
                    {categoriesRadioButton}
                  </div>
                  <label className="label" htmlFor="pTitle">
                    title
                  </label>
                  <input
                    className="data-input"
                    type="text"
                    name="pTitle"
                    onChange={onDataChangeHandler}
                  />

                  <label className="label" htmlFor="pDescription">
                    product description
                  </label>
                  <input
                    className="data-input"
                    type="text"
                    name="pDescription"
                    onChange={onDataChangeHandler}
                  />

                  <label className="label" htmlFor="pPrice">
                    product price
                  </label>
                  <input
                    className="data-input"
                    type="text"
                    name="pPrice"
                    onChange={onDataChangeHandler}
                  />

                  <label className="label" htmlFor="pImg">
                    product img
                  </label>
                  <input
                    className="data-input"
                    type="text"
                    name="pImg"
                    onChange={onDataChangeHandler}
                  />
                  <div className="btn-wrapper">
                    <button className="btn btn_create" type="submit">
                      CREATE
                    </button>

                    <button className="btn btn_clear" type="button">
                      clear form
                    </button>
                  </div>
                </div>
*/
