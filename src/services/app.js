function getData(url) {
  return fetch(url).then((res) => {
    if (res.status !== "ok") {
      throw new Error("Error");
    }
    return res.json();
  })
  .catch((err) => console.log(err, "ERROR"));
}

export {getData};