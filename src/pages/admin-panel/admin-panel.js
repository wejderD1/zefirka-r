import Carousel from "../../components/carousel/carousel";
import "./admin-panel.scss";
import { useCallback, useEffect, useState } from "react";

const AdminPanel = ({
  newProductCreate,
  categoriesName,
  data,
  onProductDelete,
}) => {
  const [selectedOption, setSelectedOption] = useState(categoriesName[0]);
  const [productCard, setProductCard] = useState({
    category: "",
    pTitle: "",
    pDescription: "",
    pPrice: null,
    pImg: "",
  });
  const [task, setTask] = useState([
    "Stwóż"
    "Create new product item. Insert product title, description and price",
    "Crea"
  ])

  useEffect(() => {
    setProductCard((prevState) => ({
      ...prevState,
      category: selectedOption,
    }));
  }, [selectedOption]);

  const handleRadioChange = useCallback((e) => {
    setSelectedOption(e.target.value);
  }, []);

  const onDataChange = (e) => {
    setProductCard((prevState) => ({
      ...prevState, // сохраняем предыдущее состояние объекта
      [e.target.name]: e.target.value, // устанавливаем новое значение для свойства name
    }));
  };

  const categoriesRadio = categoriesName.map((el, i) => {
    return (
      <label key={i}>
        <input
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

  return (
    <div className="admin-panel">
      <div className="admin-panel__wrapper">
        <h1>ADMIN PANEL</h1>

        <h2 className="main-text">
          Create new product item. Insert product title, description and price
        </h2>

        <Carousel>
          {/* create new product tab */}
          <div className="data__item-wrapper">
            <div className="data-input__container">
              <div className="categories__wrapper">{categoriesRadio}</div>
              <label className="label" htmlFor="pTitle">
                title
              </label>
              <input
                className="data-input"
                type="text"
                name="pTitle"
                onChange={onDataChange}
              />

              <label className="label" htmlFor="pDescription">
                product description
              </label>
              <input
                className="data-input"
                type="text"
                name="pDescription"
                onChange={onDataChange}
              />

              <label className="label" htmlFor="pPrice">
                product price
              </label>
              <input
                className="data-input"
                type="text"
                name="pPrice"
                onChange={onDataChange}
              />

              <label className="label" htmlFor="pImg">
                product img
              </label>
              <input
                className="data-input"
                type="text"
                name="pImg"
                onChange={onDataChange}
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
          {/* create advertising tab */}
          <div className="data__item-wrapper">
            <div className="data-input__container">
              <label className="label" htmlFor="pTitle">
                title
              </label>
              <input
                className="data-input"
                type="text"
                name="pTitle"
                onChange={onDataChange}
              />

              <label className="label" htmlFor="pDescription">
                advertising description
              </label>
              <input
                className="data-input"
                type="text"
                name="pDescription"
                onChange={onDataChange}
              />

              <label className="label" htmlFor="pImg">
                img
              </label>
              <input
                className="data-input"
                type="text"
                name="pImg"
                onChange={onDataChange}
              />
            </div>
          </div>
          {/* NONE */}
          <div className="data__item-wrapper">
            <img
              src={require(`../../assets/images/20220914_141213.jpg`)} //относительный путь, работает только в папке components/component
              alt="information-img"
              className="information__photo"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AdminPanel;
