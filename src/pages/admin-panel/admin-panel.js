import "./admin-panel.scss";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminPanel = ({
  newProductCreate,
  categoriesName,
  data,
  onProductDelete,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedOption, setSelectedOption] = useState(categoriesName[0]);
  const [productCard, setProductCard] = useState({
    category: "",
    pTitle: "",
    pDescription: "",
    pPrice: null,
    pImg: "",
  });

  useEffect(() => {
    setProductCard((prevState) => ({
      ...prevState,
      category: selectedOption,
    }));
  }, [selectedOption]);

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

  function leftHandle() {
    console.log("left");
  }

  function rightHandle() {
    console.log("right");
  }

  return (
    <div className="admin-panel">
      <div className="admin-panel__wrapper">
        <h1>ADMIN PANEL</h1>
        <div className="carousel__wrapper">
          <button
            className="carousel__btn carousel__btn_left"
            onClick={leftHandle}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          </button>
          <div className="carousel__inner">
            <div className="data__item-wrapper">
              <div className="data-input__container">
                <h2 className="main-text">
                  Utwórz nową pozycję produktu. Wstaw tytuł, opis i cenę produkt
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
                  className="btn admin-panel__button"
                  type="button"
                  onClick={() => {
                    newProductCreate(productCard);
                  }}
                >
                  CREATE
                </button>
              </div>
              <div className="data-wrapper">
                <ul>{dataItem}</ul>
              </div>
            </div>
            {/* create advertising tab * */}
            <div className="data__item-wrapper">
              <div className="data-input__container">
                <h2 className="main-text">
                  Utwórz reklamę, napisz nagłówek i opis reklamy.
                </h2>
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
                  advertising description
                </label>
                <input
                  className="data-input"
                  type="text"
                  name="pDescription"
                  onChange={onDataChangeHandler}
                />

                <label className="label" htmlFor="pImg">
                  img
                </label>
                <input
                  className="data-input"
                  type="text"
                  name="pImg"
                  onChange={onDataChangeHandler}
                />
              </div>
            </div>
            {/* NONE */}
            <div className="data__item-wrapper">
              <h2 className="main-text">nowa pozycja</h2>
              <img
                src={require(`../../assets/images/20220914_141213.jpg`)}
                alt="information-img"
                className="information__photo"
              />
            </div>
          </div>
          <button
            className="carousel__btn carousel__btn_right"
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
