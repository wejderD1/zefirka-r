import { useEffect } from "react";

import "./edit-list.scss";

function EditList({ data, i, handleDelete, container }) {
  const { id, pTitle: title } = data;

  useEffect(() => {
    return () => {
      document.removeEventListener("click", handleDelete);
    };
  }, []);

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

  return (
    <li
      key={i}
      className="data-item"
      onClick={() => selectedProduct(container)}
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
}

export default EditList;
