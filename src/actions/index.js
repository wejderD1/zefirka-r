export const productCreated = (product) => {
  return {
      type: 'PRODUCT_CREATED',
      payload: product
  }
}

export const productCategoriesChanged = (categoryName) => {
  return {
      type: 'PRODUCT_CATEGORIES_CHANGED',
      payload: categoryName
  }
}