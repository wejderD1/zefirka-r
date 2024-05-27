import { useEffect, useState } from "react";

import "./edit-list.scss";

function EditList({ data, i, handleDelete, container }) {
  const { id, pTitle: title } = data;
  // const item = { ...data };

  /**
   * нужно в передавать наверх значение выбраного елемента (т.е. ) елемента в списке
   * и уже в елементе :админ панель: подставлять значение в инпуты и записывать в стейт 
   * выбраный елемент массива
   * 
   * этот компонент не должен обрабатывать он только рисует список продуктов
   * 
   * функция selectedProduct должна быть в компоненте admin panel 
   * тогда и пропс container не будет нужен
   */

  useEffect(() => {
    return () => {
      document.removeEventListener("click", handleDelete);
    };
  }, []);


  //перенести в другой компонент
  const selectedProduct = (elem) => {
    //получаю все инпуты на странице
    const el = Object.values(elem.children).filter(
      (e) => e.className === "data-input"
    );

    //подставляю значения выбраного продукта в инпуты
    for (const elem of el) {
      for (const e in data) {
        if (elem.name === e) {
          elem.value = data[e];
        }
      }
    }
  };

  const renderDataList = () => {
    let label = '';
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        label += element + "---";
      }
    }
    return <p>{label}</p>;

  };
  
  return (
    <li
      key={i}
      className="data-item"
      onClick={() => selectedProduct(container)}
    >
      {renderDataList()}

      <button
        className="data-delete"
        type="submit"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>

    </li>
  );
}

export default EditList;
