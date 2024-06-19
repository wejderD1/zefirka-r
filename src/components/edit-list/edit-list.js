import { Fragment } from "react";

import "./edit-list.scss";

function EditList({ editList, submitHandler, selectItemsHandler }) {
  if (!editList) {
    return (
      <Fragment>
        <h1>List is empty</h1>
      </Fragment>
    );
  }
  const renderDataList = editList.map((el) => {
    const id = el[Object.keys(el)[0]]
    const title = el[Object.keys(el)[1]]
    return (
      <li
        key={id}
        className="data__item"
        onClick={() => selectItemsHandler(id)}
      >
        {`${id}  -----  ${title}`}

        <button 
          className="data__delete"
          type="button"
          onClick={() => submitHandler(id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <ol className="data__container">
      {renderDataList}
    </ol>
  );
}

export default EditList;
