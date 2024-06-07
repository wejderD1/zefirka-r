import { useCallback, Fragment, useEffect, useState } from "react";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";

import EditList from "../../edit-list/edit-list";
import { categoriesChanged, addProduct } from "../../../actions";
import { postData } from "../../../services/app";

import "./product-slider.scss";

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

  // const filteredProductsListSelector = createSelector(
  //   (state) => state.productReducer.productsList,
  //   (state) => state.categoryReducer.activeCategory,
  //   (products, selectedCategory) =>
  //     products.filter((el) => el.category === selectedCategory)
  // );

  // const filteredProductsList = useSelector(filteredProductsListSelector);
  // const dispatch = useDispatch();

  const [id, setId] = useState("");

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id,
      category: activeCategory,
      pTitle: productName,
      pDescription: productDescription,
      pPrice: productPrice,
      pImg: "20210529_105117.jpg"
      // pImg: productImage,
    };

    postData("http://localhost:5000/products/new-product", newProduct)
      .then((data) => dispatch(addProduct(data)))
      .catch((error) => console.error(error));

    setProductName("");
    setProductDescription("");
    setProductImage("");
    setProductPrice("");
  };

  useEffect(() => {
    setId(uniqueID());
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
      <form action="POST" onSubmit={onSubmitHandler}>
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
                      ? id
                      : null || el === "category"
                      ? activeCategory
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
