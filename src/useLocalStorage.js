import {useEffect, useState} from "react";

function getStorageValue(key, defaultValue) {
  const localData = JSON.parse(localStorage.getItem(key));
  return localData || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  })

  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(value)); 
  }, [key, value]);

  return [value, setValue];
}