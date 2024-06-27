export const categoriesChanged = (categoryName) => {
  return {
      type: 'CATEGORIES_CHANGED',
      payload: categoryName
  }
}

export const userFetchCounter = (data) => {
  return {
    type: "FETCH_COUNTER",
    payload: data
  }
}