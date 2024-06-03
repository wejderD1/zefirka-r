export const productCreated = (product) => {
  return {
      type: 'PRODUCT_CREATED',
      payload: product
  }
}