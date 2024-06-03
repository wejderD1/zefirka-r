import { Fragment, useEffect } from "react";

import "./edit-list.scss";

function EditList({ data, i, handleDelete, selectedProduct }) {
  const { id } = data;

  useEffect(() => {
    return () => {
      document.removeEventListener("click", handleDelete);
    };
  }, []);


  const renderDataList = () => {
    let title = "";
    let desc = "";
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        title += key +"  ";
        desc += element + "   /   ";
      }
    }
    return (
      <Fragment>
        <p>{title}</p>
        <h5>{desc}</h5>
      </Fragment>
    );
  };

  return (
    <li
      key={i}
      className="data-item"
      onClick={() => selectedProduct(id)}
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
