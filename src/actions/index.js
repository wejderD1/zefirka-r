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