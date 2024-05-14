import "./admin-panel.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { postData } from "../../services/app";
import { InputDataChange } from "../../services/hoocks";

const AdminPanel = ({
  newProductCreate,
  categoriesName,
  data,
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
    const uniqueID = `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    productCard.addProperty({ id: uniqueID, category: selectedOption });
  }, [selectedOption]);

  //get slides count into slider
  useEffect(() => {
    const childrenLength = carouselInner.current.children.length;
    setNumberOfChildren(childrenLength);
  }, [numberOfChildren]);

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

  //ratio button change
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

  //created data change block (products list & delete button)
  const ProductsControlItem = ({ data, i }) => {
    const { id, category, pTitle: title } = data;

    const handleDelete = (id) => {
      postData("http://localhost:5000/products/remove", {
        productId: id,
      });
      onProductDelete(id);
    };

    const handleChange = (elem) => {
      //получаю все инпуты на странице
      const el = Object.values(elem.children).filter(
        (e) => e.className === "data-input"
      );

      //подставляю значения выбраного продукта в инпуты
      for (const elem of el) {
        for (const e in data) {
          if(elem.name === e){
            elem.value = data[e]
          }
        }
      }
    };

    useEffect(() => {
      return () => {
        document.removeEventListener("click", handleDelete);
      };
    }, []);

    return (
      <li
        key={i}
        className="data-item"
        onClick={() => handleChange(itemContainer.current)}
      >
        <p>{`${id} --- ${title}`}</p>
        <button
          className="data-delete"
          type="submit"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  };

  //create data items
  const dataItem = data
    .filter((el) => el.category === selectedOption)
    .map((el, i) => {
      return <ProductsControlItem data={el} key={i} />;
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
                  <div className="categories__wrapper">{categoriesRadioButton}</div>
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

                  <button className="btn btn-create" type="submit">
                    CREATE
                  </button>
                </div>
              </form>

              {/* DATA CONTAINER */}
              <div className="data-wrapper">
                <form onSubmit={(e) => e.preventDefault()}>
                  <ul>{dataItem}</ul>
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
                <label className="label" htmlFor="aTitle">
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
                />
                <button
                  className="btn btn-create"
                  type="button"
                  onClick={() => {
                    newAdvertisingCreate(advertising);
                  }}
                >
                  CREATE
                </button>
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
