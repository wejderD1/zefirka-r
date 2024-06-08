import { useCallback, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { categoriesChanged, addProduct } from "../../../actions";

import "./product-slider.scss";
import { useHttp } from "../../../services/http.hooks";

function ProductSlider({
  categoriesName,
  productCard,
}) {
  const { activeCategory } = useSelector((state) => state.categoryReducer);
  const { request } = useHttp();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: uuidv4(),
      category: activeCategory,
      pTitle: productName,
      pDescription: productDescription,
      pPrice: productPrice,
      pImg: productImage || "20210529_105117.jpg",
    };

    request(
      "http://localhost:5000/products/new-product",
      "POST",
      JSON.stringify(newProduct)
    )
      .then(dispatch(addProduct(newProduct)))
      .catch((err) => console.log(err));

    setProductName("");
    setProductDescription("");
    setProductImage("");
    setProductPrice("");
  };

  //radio button change
  const handleRadioChange = useCallback((e) => {
    dispatch(categoriesChanged(e.target.value));
  }, []);

  //input data changed
  const onDataChangeHandler = useCallback((e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "pTitle":
        setProductName(value);
        break;
      case "pDescription":
        setProductDescription(value);
        break;
      case "pPrice":
        setProductPrice(value);
        break;
      case "pImg":
        setProductImage(value);
        break;
      default:
        break;
    }
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
      <form onSubmit={onSubmitHandler}>
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
                  value={el === "pTitle" ? productName :
                    el === "pDescription" ? productDescription :
                    el === "pPrice" ? productPrice :
                    el === "pImg" ? productImage : ''}
                  onChange={onDataChangeHandler}
                  placeholder={el === "category" ? activeCategory : null}
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
