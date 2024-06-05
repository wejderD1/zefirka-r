export const productsFetched = (product) => {
  return {
      type: 'PRODUCTS_FETCHED',
      payload: product
  }
}

export const productCategoriesChanged = (categoryName) => {
  return {
      type: 'PRODUCT_CATEGORIES_CHANGED',
      payload: categoryName
  }
}

export const setDefaultCategory = (categoryName) => {
  return {
      type: 'DEFAULT_CATEGORY',
      payload: categoryName
  }
}