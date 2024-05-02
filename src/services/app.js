const fetchData = async (url) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
};
export {fetchData};