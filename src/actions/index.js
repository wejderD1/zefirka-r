export const productsFetched = (product) => {
  return {
      type: 'PRODUCTS_FETCHED',
      payload: product
  }
}

export const categoriesChanged = (categoryName) => {
  return {
      type: 'CATEGORIES_CHANGED',
      payload: categoryName
  }
}

export const selectedProduct = (selectedId) => {
  return {
    type: 'SELECTED_PRODUCT',
    payload: selectedId
  }
}

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  }
}

export const advertisingFetched = (data) => {
  return {
    type: "ADVERTISING_FETCHED",
    payload: data
  }
} 

export const createAdvertising = (advertising) => {
  return {
    type: "ADVERTISING_CREATE",
    payload: advertising
  }
}