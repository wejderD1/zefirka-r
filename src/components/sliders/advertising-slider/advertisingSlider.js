import { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { createAdvertising } from "../../../actions";
import { useDispatch } from "react-redux";

import { useHttp } from "../../../services/http.hooks";

function AdvertisingSlider({ advertisingCard }) {
  const [advertisingName, setAdvertisingName] = useState("");
  const [advertisingDescription, setAdvertisingDescription] = useState("");
  const [advertisingNote, setAdvertisingNote] = useState("");
  const [advertisingImage, setAdvertisingImage] = useState("");
  const { request } = useHttp();

  // const {advertisingList} = useSelector((state) => state.advertisingReducer)
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newAdvertising = {
      id: uuidv4(),
      aTitle: advertisingName,
      aDesc: advertisingDescription,
      pNote: advertisingNote,
      aImg: advertisingImage || "20210529_105117.jpg",
    };

    request(
      "http://localhost:5000/advertising/new-advertising",
      "POST",
      JSON.stringify(newAdvertising)
    )
      .then(dispatch(createAdvertising(newAdvertising)))
      .catch((err) => console.log(err));

    setAdvertisingName("");
    setAdvertisingDescription("");
    setAdvertisingImage("");
    setAdvertisingNote("");
  };

  const onAdvertisingDataChange = (e) => {
    advertisingCard.onDataChange(e);
  };

  return (
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
                onChange={onAdvertisingDataChange}
                placeholder={el === "id" ? advertisingCard.value.id : null}
              />
            </Fragment>
          );
        })}
        <button className="btn btn_create" type="button">
          CREATE
        </button>
      </div>
    </form>
  );
}

export default AdvertisingSlider;
