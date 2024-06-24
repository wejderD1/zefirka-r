export const categoriesChanged = (categoryName) => {
  return {
      type: 'CATEGORIES_CHANGED',
      payload: categoryName
  }
}
