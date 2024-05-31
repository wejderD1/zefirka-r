import { useState } from "react";

const InputDataChange = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onDataChange = (event) => {
    const eventData = event.target;

    setValue((prevState) => ({
      ...prevState,
        [eventData.name]: eventData.value
      }));
  }

  const addProperty = (otherValue = {}) => {
    setValue((prevState) => ({
      ...prevState,
      ...otherValue
    }));
  }

  return {value, onDataChange, addProperty};
}


export {InputDataChange};