const fetchData = async (url) => {
  try {
    const data = await fetch(url)
    .then((response) => response.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
export {fetchData};