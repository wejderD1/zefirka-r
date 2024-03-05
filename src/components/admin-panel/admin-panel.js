import "./admin-panel.scss";
import { useState } from "react";

const AdminPanel = ({ newProductCreate }) => {
  const categories = [
    "Torty musowe",
    "Zefir",
    "Ciastka",
    "Czekoladki",
    "Motti",
    "Wielkanocne wypieki"
  ];
  
  const [selectedOption, setSelectedOption] = useState(categories[0]);

  let productData = {
    pTitle: "",
    pDescription: "",
    pPrice: null,
    pImg: "",
  };

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const onDataChange = (e) => {
    productData[e.target.name] = e.target.value;
  };

  const categoriesRadio = categories.map((el, i) => {
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

  return (
    <div className="admin-panel">
      <div className="admin-panel__wrapper">
        <h1>ADMIN PANEL</h1>

        <h2 className="main-text">
          Create new product item. Insert product title, description and price
        </h2>
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
            onClick={() => newProductCreate(productData)}
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
