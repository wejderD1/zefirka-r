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

const postData = async(url, dataPost) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPost)
    })
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


export {fetchData, postData};