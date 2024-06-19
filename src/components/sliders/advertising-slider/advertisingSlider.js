import { Fragment, useCallback, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { advertisingCreate, advertisingDelete, advertisingFetched } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";

import { useHttp } from "../../../services/http.hooks";
import EditList from "../../edit-list/edit-list";

function AdvertisingSlider({ advertisingCard }) {
  const [advertisingName, setAdvertisingName] = useState("");
  const [advertisingDescription, setAdvertisingDescription] = useState("");
  const [advertisingNote, setAdvertisingNote] = useState("");
  const [advertisingImage, setAdvertisingImage] = useState("");
  const { request } = useHttp();

  const { advertisingsList } = useSelector(
    (state) => state.advertisingReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    request("http://localhost:5000/advertising")
      .then((data) => dispatch(advertisingFetched(data)))
      .catch((error) => console.error(error));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newAdvertising = {
      id: uuidv4(),
      aTitle: advertisingName,
      aDesc: advertisingDescription,
      aNote: advertisingNote,
      aImg: advertisingImage,
    };

    if(!advertisingName || !advertisingDescription ) {
      return;
    }
    request(
      "http://localhost:5000/advertising/new-advertising",
      "POST",
      JSON.stringify(newAdvertising)
    )
      .then(dispatch(advertisingCreate(newAdvertising)))
      .catch((err) => console.log(err));

    setAdvertisingName("");
    setAdvertisingDescription("");
    setAdvertisingImage("");
    setAdvertisingNote("");
  };

  //input data changed
  const onDataChangeHandler = (e) => {
    const value = e.target.value;
    switch (e.target.name) {
      case "aTitle":
        setAdvertisingName(value);
        break;
      case "aDesc":
        setAdvertisingDescription(value);
        break;
      case "aNote":
        setAdvertisingNote(value);
        break;
      case "aImg":
        setAdvertisingImage(value);
        break;
      default:
        break;
    }
  };

  const deleteHandler = (id) => {
    if(!window.confirm("Delete this content?")){
      return
    }
    request(
      `http://localhost:5000/advertising/${id}`,
      "DELETE",
    )
      .then(() => dispatch(advertisingDelete(id)))
      .catch((error) => console.error(error));
  };

  const editList = advertisingsList.map((el) => ({
    id: el.id,
    title: el.aTitle,
  }));

  return (
    <Fragment>
      <form action="POST" onSubmit={onSubmitHandler}>
        <div className="item__container">
          <h2 className="main-text">
            Utwórz reklamę, napisz nagłówek i opis reklamy.
          </h2>
          {Object.keys(advertisingCard.value).map((el, i) => {
            return (
              <Fragment key={i}>
                <label className="label" htmlFor={el}>
                  {el}
                </label>
                <input
                  className="data-input"
                  type="text"
                  name={el}
                  value={
                    el === "aTitle"
                      ? advertisingName
                      : el === "aDesc"
                      ? advertisingDescription
                      : el === "aNote"
                      ? advertisingNote
                      : el === "aImg"
                      ? advertisingImage
                      : ""
                  }
                  onChange={onDataChangeHandler}
                  placeholder={el === "id" ? advertisingCard.value.id : null}
                />
              </Fragment>
            );
          })}
          <button className="btn btn_create" type="submit">
            CREATE
          </button>
        </div>
      </form>
      <EditList editList={editList} submitHandler={deleteHandler}/>
    </Fragment>
  );
}

export default AdvertisingSlider;
