import { useState, useCallback, Fragment, useEffect } from "react";

import "./product-slider.scss";

const uniqueID = () =>
  `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

function ProductSlider({ categoriesName, handleSubmit, productCard }) {
  const [selectedOption, setSelectedOption] = useState(categoriesName[0]);

  useEffect(() => {
    productCard.addProperty({ id: uniqueID() });
  }, []);

  //created unique id from product card
  useEffect(() => {
    productCard.addProperty({ category: selectedOption });
  }, [selectedOption]);

  //radio button change
  const handleRadioChange = useCallback((e) => {
    setSelectedOption(e.target.value);
  }, []);

  //input data changed
  const onDataChangeHandler = (e) => {
    productCard.onDataChange(e);
  };

  //created categories block (ratio buttons)
  const categoriesRadioButton = categoriesName.map((el, i) => {
    return (
      <label key={i}>
        <input
          className="categories__radio"
          key={i}
          type="radio"
          value={el}
          checked={selectedOption === el}
          onChange={handleRadioChange}
          name="categories"
        />
        {el}
      </label>
    );
  });

  return (
    <form action="POST" onSubmit={handleSubmit("http://localhost:5000/products/new-product")}>
      <div className="item__container">
        <h2 className="main-text">
          Utwórz nową pozycję produktu. Wstaw tytuł, opis i cenę produktu
        </h2>
        <div className="categories__wrapper">{categoriesRadioButton}</div>
        {Object.keys(productCard.value).map((el, i) => {
          return (
            <Fragment key={i}>
              <label className="label" htmlFor={el}>
                {el}
              </label>
              <input
                className="data-input"
                type="text"
                name={el}
                onChange={onDataChangeHandler}
                placeholder={
                  el === "id"
                    ? productCard.value.id
                    : null || el === "category"
                    ? productCard.value.category
                    : null
                }
                disabled={el === "id" || el === "category" ? true : false}
              />
            </Fragment>
          );
        })}
        <div className="btn-wrapper">
          <button className="btn btn_create" type="submit">
            CREATE
          </button>

          <button className="btn btn_clear" type="button">
            clear form
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProductSlider;
