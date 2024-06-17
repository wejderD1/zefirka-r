import { Fragment, useEffect } from "react";

import "./edit-list.scss";
import { useSelector, useDispatch } from "react-redux";
import { productsFetched } from "../../actions";
import { useHttp } from "../../services/http.hooks";


function EditList({editList}) {

  // useEffect(() => {
  //   return () => {
  //     document.removeEventListener("click", handleDelete);
  //   };
  // }, []);

console.log(editList);
  if(!editList) {
    return (
      <Fragment>
      <h1>List is empty</h1>
    </Fragment>
    )
  }

  const renderDataList = editList.map((el, i) => {
    return (
      <li
        key={i}
        className="data-item"
        // onClick={() => selectedProduct(i)}
      >
  
        <button
          className="data-delete"
          type="submit"
        >
          Delete
        </button>
      </li>
    );
  })

  return renderDataList;


}

export default EditList;
