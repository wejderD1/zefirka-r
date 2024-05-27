import "./admin-panel.scss";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { postData } from "../../services/app";
import { InputDataChange } from "../../services/hoocks";
import EditList from "../../components/edit-list/edit-list";

const uniqueID = () =>
  `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

const AdminPanel = ({
  newProductCreate,
  categoriesName,
  productData,
  advertisingData,
  onProductDelete,
  newAdvertisingCreate,
}) => {
  const productCard = InputDataChange({
    id: null,
    category: "",
    pTitle: "",
    pDescription: "",
    pPrice: null,
    pImg: "",
  });

  const advertising = InputDataChange({
    aTitle: "",
    aDesc: "",
    aNote: "",
    aImg: "",
  });

  const [activeSlide, setActiveSlide] = useState(1);
  const [selectedOption, setSelectedOption] = useState(categoriesName[0]);
  const [numberOfChildren, setNumberOfChildren] = useState(0);

  const carouselInner = useRef(null);
  const itemContainer = useRef(null);

  //created unique id from product card
  useEffect(() => {
    productCard.addProperty({ id: uniqueID(), category: selectedOption });
  }, [selectedOption]);

  //get slides count into slider
  useEffect(() => {
    const childrenLength = carouselInner.current.children.length;
    setNumberOfChildren(childrenLength);
  }, [numberOfChildren]);

  //.....continue created....
  useEffect(() => {
//    setSelectedElement((prev) => (...prev, selected))
  }, [])//зависимость от выбраного компонента который попадет в стейт

  //submit product to server
  const handleSubmit = (e) => {
    e.preventDefault();
    const elem = Object.values(e.target.elements).filter(
      (el) => el.className === "data-input"
    );

    postData("http://localhost:5000/products/new-product", productCard.value);
    newProductCreate(productCard.value);
    elem.forEach((element) => {
      element.value = "";
    });
  };

  //radio button change
  const handleRadioChange = useCallback((e) => {
    setSelectedOption(e.target.value);
  }, []);

  //input data changed
  const onDataChangeHandler = (e) => {
    productCard.onDataChange(e);
  };

  const onAdvertisingDataChange = (e) => {
    advertising.onDataChange(e);
  };

  const rightHandle = () => {
    if (activeSlide !== numberOfChildren) {
      setActiveSlide((prevSlide) => {
        const updatedSlide = prevSlide + 1;
        return updatedSlide;
      });
    }
  };

  const leftHandle = () => {
    if (activeSlide !== 1) {
      setActiveSlide((prevSlide) => {
        const updatedSlide = prevSlide - 1;
        return updatedSlide;
      });
    }
  };

  const handleDelete = (id) => {
    postData("http://localhost:5000/products/remove", {
      productId: id,
    });
    onProductDelete(id);
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

  //create Edit List
  const productEditList = productData
    .filter((el) => el.category === selectedOption)
    .map((el, i) => {
      return (
        <EditList
          data={el}
          key={i}
          handleDelete={handleDelete}
          container={itemContainer.current}
        />
      );
    });

  //create Edit List
  const advertisingEditList = advertisingData.map((el, i) => {
    return (
      <EditList
        data={el}
        key={i}
        handleDelete={handleDelete}
        container={itemContainer.current}
      />
    );
  });

  return (
    <div className="admin-panel">
      <div className="admin-panel__wrapper">
        <h1>ADMIN PANEL</h1>
        <div className="carousel__wrapper">
          <button
            className="btn carousel__btn carousel__btn_left"
            onClick={leftHandle}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          </button>
          <div className="carousel__inner" ref={carouselInner}>
            <div
              className={`carousel__item-wrapper ${
                activeSlide === 1 ? "carousel__item-wrapper_active" : ""
              } `}
            >
              <form action="POST" onSubmit={handleSubmit}>
                <div className="item__container" ref={itemContainer}>
                  <h2 className="main-text">
                    Utwórz nową pozycję produktu. Wstaw tytuł, opis i cenę
                    produktu
                  </h2>
                  <div className="categories__wrapper">
                    {categoriesRadioButton}
                  </div>
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
                          disabled={
                            el === "id" || el === "category" ? true : false
                          }
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

              {/* DATA CONTAINER */}
              <div className="data-wrapper">
                <form onSubmit={(e) => e.preventDefault()}>
                  <ul>{productEditList}</ul>
                </form>
              </div>
            </div>
            {/* create advertising tab * */}
            <div
              className={`carousel__item-wrapper ${
                activeSlide === 2 ? "carousel__item-wrapper_active" : ""
              } `}
            >
              <div className="item__container">
                <h2 className="main-text">
                  Utwórz reklamę, napisz nagłówek i opis reklamy.
                </h2>
                {Object.keys(advertising.value).map((el, i) => {
                  return (
                    <Fragment key={i}>
                      <label className="label" htmlFor={el}>
                        {el}
                      </label>
                      <input
                        className="data-input"
                        type="text"
                        name={el}
                        onChange={onAdvertisingDataChange}
                        placeholder={el === "id" ? advertising.value.id : null}
                      />
                    </Fragment>
                  );
                })}
                {/* <label className="label" htmlFor="aTitle">
                  title
                </label>
                <input
                  className="data-input"
                  type="text"
                  name="aTitle"
                  onChange={onAdvertisingDataChange}
                />
                <label className="label" htmlFor="aDesc">
                  advertising description
                </label>
                <input
                  className="data-input"
                  type="text"
                  name="aDesc"
                  onChange={onAdvertisingDataChange}
                />
                <label className="label" htmlFor="aNote">
                  advertising note
                </label>
                <input
                  className="data-input"
                  type="text"
                  name="aNote"
                  onChange={onAdvertisingDataChange}
                />
                <label className="label" htmlFor="aImg">
                  img
                </label>
                <input
                  className="data-input"
                  type="text"
                  name="aImg"
                  onChange={onAdvertisingDataChange}
                /> */}
                <button
                  className="btn btn_create"
                  type="button"
                  onClick={() => {
                    newAdvertisingCreate(advertising);
                  }}
                >
                  CREATE
                </button>
              </div>
              {/* DATA CONTAINER */}
              <div className="data-wrapper">
                <form onSubmit={(e) => e.preventDefault()}>
                  <ul>{advertisingEditList}</ul>
                </form>
              </div>
            </div>
          </div>
          <button
            className="btn carousel__btn carousel__btn_right"
            onClick={rightHandle}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
