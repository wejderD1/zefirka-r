import "./admin-panel.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
// import { getData } from "../../services/app";

const AdminPanel = ({
  newProductCreate,
  categoriesName,
  data,
  onProductDelete,
  newAdvertisingCreate,
}) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [selectedOption, setSelectedOption] = useState(categoriesName[0]);
  const [productCard, setProductCard] = useState({
    category: "",
    pTitle: "",
    pDescription: "",
    pPrice: null,
    pImg: "",
  });

  const [advertising, setAdvertising] = useState({
    aTitle: "",
    aDesc: "",
    aNote: "",
    aImg: "",
  });

  const carouselInner = useRef(null);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [responce, setResponce] = useState([]);

  // const subscribe = async () => {
  //   try {
  //     const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setUserData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  const fetchData = async () => {
    try {
      fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((json) => {
        setResponce((prev) => [...prev, json]);
        console.log(json)
      }); 
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchData();
    console.log(responce);
  }, []);

  useEffect(() => {
    setProductCard((prevState) => ({
      ...prevState,
      category: selectedOption,
    }));
  }, [selectedOption]);

  //получаю количество слайдов в слайдере
  useEffect(() => {
    const childrenLength = carouselInner.current.children.length;
    setNumberOfChildren(childrenLength);
  }, [numberOfChildren]);

  //ratio button change
  const handleRadioChange = useCallback((e) => {
    setSelectedOption(e.target.value);
  }, []);

  //input data changed
  const onDataChangeHandler = (e) => {
    setProductCard((prevState) => ({
      ...prevState, // сохраняем предыдущее состояние объекта
      [e.target.name]: e.target.value, // устанавливаем новое значение для свойства name
    }));
  };

  const onAdvertisingDataChange = (e) => {
    setAdvertising((prevState) => ({
      ...prevState, // сохраняем предыдущее состояние объекта
      [e.target.name]: e.target.value, // устанавливаем новое значение для свойства name
    }));
  };

  //created categories block (ratio buttons)
  const categoriesRadio = categoriesName.map((el, i) => {
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
  const dataItem = data
    .filter((el) => el.category === selectedOption)
    .map(({ category, pTitle }, i) => {
      return (
        <li key={i} className="data-item">
          <p>{`${category} --- ${pTitle}`}</p>
          <button
            className="data-delete"
            onClick={() => onProductDelete(pTitle)}
          >
            Delete
          </button>
        </li>
      );
    });

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
              <div className="item__container">
                <h2 className="main-text">
                  Utwórz nową pozycję produktu. Wstaw tytuł, opis i cenę
                  produktu
                </h2>
                <div className="categories__wrapper">{categoriesRadio}</div>
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

                <button
                  className="btn btn-create"
                  type="button"
                  onClick={() => {
                    newProductCreate(productCard);
                  }}
                >
                  CREATE
                </button>
              </div>

              {/* DATA CONTAINER */}
              <div className="data-wrapper">
                <ul>{dataItem}</ul>
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
