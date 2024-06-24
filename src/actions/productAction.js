import {FETCHED_ITEM, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, SELECT_ITEM} from "./types";

export const fetchedProducts = (products) => {
  return {
      type: FETCHED_ITEM,
      payload: {entity: "products", item: products}
  }
}
export const selectedProduct = (id) => {
  return {
    type: SELECT_ITEM,
    payload: {entity: "products", id}
  }
}

export const addProduct = (product) => {
  return {
    type: ADD_ITEM,
    payload: { entity: 'products', item: product }
  }
}

export const deleteProduct = (id) => {
  return {
    type: DELETE_ITEM,
    payload: {entity: "products", id}
  }
}

export const updateProduct = (product) => {
  return {
    type: UPDATE_ITEM,
    payload: { entity: 'products', item: product }
  }
}
