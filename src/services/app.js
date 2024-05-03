const getResource = async (url) => {
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
    });

    const result = response.json();
    console.log(`Success --- ${result}`);
  } catch (error) {
    console.error(error);
  }
}

export {getResource, postData};