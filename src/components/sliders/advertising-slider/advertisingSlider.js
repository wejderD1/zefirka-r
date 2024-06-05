import { Fragment, useEffect, useState } from "react";

const uniqueID = () =>
  `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

function AdvertisingSlider({ advertisingCard, handleSubmit }) {
  const onAdvertisingDataChange = (e) => {
    advertisingCard.onDataChange(e);
  };

  useEffect(() => {
    advertisingCard.addProperty({ id: uniqueID() });
  }, []);

  return (
    <form action="POST" onSubmit={handleSubmit}>
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
        <button
          className="btn btn_create"
          type="button"
        >
          CREATE
        </button>
      </div>
      </form>
  );
}

export default AdvertisingSlider;
