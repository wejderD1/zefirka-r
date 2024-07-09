import { useCallback, Fragment, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  addProduct,
  deleteProduct,
  fetchedProducts,
  selectedProduct,
  updateProduct,
} from "../../../actions/productAction";

import { categoriesChanged } from "../../../actions";

import { useHttp } from "../../../services/http.hooks";
import EditList from "../../edit-list/edit-list";

function ProductSlider({ categoriesName, productCard }) {
  const { activeCategory } = useSelector((state) => state.categoryReducer);
  const { itemsList, oneProduct } = useSelector(
    (state) => state.universalReducer.products
  );
  const dispatch = useDispatch();

  const [id, setId] = useState(uuidv4());
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const { request } = useHttp();

  useEffect(() => {
    request("http://localhost:5000/products")
      .then((data) => {
        dispatch(fetchedProducts(data));
      })
      .catch((error) => console.error(error));
  }, [dispatch, request]);

  useEffect(() => {
    if (oneProduct) {
      const { id, pTitle, pDescription, pPrice, pImg } = oneProduct;
      setId(id);
      setProductName(pTitle);
      setProductDescription(pDescription);
      setProductPrice(pPrice);
      setProductImage(pImg);
    }
  }, [oneProduct]);

  const filteredItems = useMemo(() => {
    return itemsList.filter((el) => el.category === activeCategory);
  }, [itemsList, activeCategory]);

  //clear input fields
  function clearDataItems() {
    setId(uuidv4());
    setProductName("");
    setProductDescription("");
    setProductImage("");
    setProductPrice("");
  }

  //product create POST
  //нужно будет в конце убрать картинку по умолчанию
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    const newProduct = {
      id: id,
      category: activeCategory,
      pTitle: productName,
      pDescription: productDescription || "brak opisu",
      pPrice: productPrice || "brak ceny",
      pImg: productImage || "20210529_105117.jpg",
    };
 
    try {
      const data = await request(
        "http://localhost:5000/products/new-product",
        "POST",
        JSON.stringify(newProduct)
      );
      dispatch(addProduct(data));
    } catch (error) {
      console.error(error);
    }
    clearDataItems();
  };

  //product remove
  const submitDelete = (id) => {
    if (!window.confirm("Delete this product?")) {
      return;
    }
    request(`http://localhost:5000/products/${id}`, "DELETE")
      .then(() => dispatch(deleteProduct(id)))
      .catch((error) => console.error(error));

    clearDataItems();
  };

  //add selected product to input fields
  const selectHandler = (prodId) => {
    dispatch(selectedProduct(prodId));
  };

  //PATCH request
  const updateHandler = () => {
    const changedProduct = {
      id,
      pTitle: productName,
      pDescription: productDescription,
      pPrice: productPrice,
      pImg: productImage,
    };

    request(
      `http://localhost:5000/products/${id}`,
      "PATCH",
      JSON.stringify(changedProduct)
    ).catch((err) => console.error(err));
    dispatch(updateProduct(changedProduct));
    // clearDataItems();
  };

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
  }, [setProductName, setProductDescription, setProductPrice, setProductImage]);

  //radio button change
  const handleRadioChange = useCallback((e) => {
    dispatch(categoriesChanged(e.target.value));
  }, [dispatch]);

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

  //created editList data
  //ЭТОТ ЕЛЕМЕНТ НЕ ХОЧЕТ ПЕРЕРИСОВЫВАТЬСЯ
  const editList = useMemo(() => {
    return filteredItems.map((el) => ({
      id: el.id,
      title: el.pTitle,
    }));
  }, [filteredItems]);

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
                  value={
                    el === "pTitle"
                      ? productName
                      : el === "pDescription"
                      ? productDescription
                      : el === "pPrice"
                      ? productPrice
                      : el === "pImg"
                      ? productImage
                      : ""
                  }
                  onChange={onDataChangeHandler}
                  placeholder={
                    el === "category"
                      ? activeCategory
                      : null || el === "id"
                      ? id
                      : null
                  }
                  disabled={el === "id" || el === "category" ? true : false}
                />
              </Fragment>
            );
          })}
          <div className="btn-wrapper">
            <button className="btn btn_create btn_admin" type="submit">
              CREATE
            </button>
            <button
              className="btn btn_update btn_admin"
              type="button"
              onClick={() => updateHandler()}
            >
              update
            </button>
            <button
              className="btn btn_clear btn_admin"
              type="button"
              onClick={() => clearDataItems()}
            >
              clear form
            </button>
          </div>
        </div>
      </form>
      <form action="DELETE">
        <EditList
          editList={editList}
          submitHandler={submitDelete}
          selectItemHandler={selectHandler}
        />
      </form>
    </Fragment>
  );
}

export default ProductSlider;
