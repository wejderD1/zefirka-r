import { useCallback, Fragment, useEffect, useState } from "react";

import EditList from "../../edit-list/edit-list";
import "./product-slider.scss";
import { useDispatch, useSelector } from "react-redux";
import { categoriesChanged } from "../../../actions";

const uniqueID = () =>
  `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

function ProductSlider({
  categoriesName,
  handleSubmit,
  productCard,
  productData,
  selectedProduct,
}) {
  const { activeCategory } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  const [id, setId] = useState("");

useEffect(() => {
  setId(uniqueID());
}, []);

  useEffect(() => {
    productCard.addProperty({ id });
  }, []);

  //created unique id from product card
  useEffect(() => {
    productCard.addProperty({ category: activeCategory });
  }, []);

  //create Edit List
  // const productEditList = productData
  //   .filter((el) => el.category === activeCategory)
  //   .map((el, i) => {
  //     return (
  //       <EditList
  //         data={el}
  //         key={i}
  //         selectedProduct={selectedProduct}
  //         // handleDelete={handleDelete}
  //       />
  //     );
  //   });

  //radio button change
  const handleRadioChange = useCallback((e) => {
    dispatch(categoriesChanged(e.target.value));
  }, []);

  //input data changed
  const onDataChangeHandler = useCallback((e) => {
    productCard.onDataChange(e);
  }, []);

  //created categories block (ratio buttons)
  const categoriesRadioButton = categoriesName.map((el, i) => {
    return (
      <label key={i}>
        <input
          className="categories__radio"
          key={i}
          type="radio"
          value={el}
          checked={activeCategory === el}
          onChange={handleRadioChange}
          name="categories"
        />
        {el}
      </label>
    );
  });

  return (
    <Fragment>
      <form action="POST" onSubmit={handleSubmit}>
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
          {/* {productEditList} */}
        </div>
      </form>
    </Fragment>
  );
}

export default ProductSlider;
