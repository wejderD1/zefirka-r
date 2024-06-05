import "./App.scss";
import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer";
import HeaderApp from "./components/header-app/header-app";

import { getResource } from "./services/app";
import {
  Page404,
  HomeView,
  ContactsView,
  ProductsView,
  AdminPanel,
  ProductDetails,
} from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { productsFetched } from "./actions";

const categories = [
  "zefir",
  "ciastka",
  "czekoladki",
  "motti",
  "cukierky",
  "torty musowe",
];

function App() {
  const { productsList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [advertisingData, setAdvertisingData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("advertising-data"));
    return data ? data : [];
  });

  const [product, setProduct] = useState({});

  useEffect(() => {
    getResource("http://localhost:5000/products")
      .then((data) => dispatch(productsFetched(data)))
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   getData("http://localhost:5000/products", setProductData);
  //   getData("http://localhost:5000/advertising", setAdvertisingData);
  //   // dispatch(productFetched());
  // }, []);

  useEffect(() => {
    if (advertisingData) {
      localStorage.setItem("advertising-data", JSON.stringify(advertisingData));
    }
  }, [advertisingData]);

  // const newProductCerate = (data) => {
  //   const { pTitle, pDescription, pPrice } = data;
  //   if (!pTitle || !pDescription || !pPrice) {
  //     return;
  //   }

  //   setProductData((prevProductData) => [...prevProductData, data]);
  // };

  // const productDelete = (productId) => {
  //   setProductData((prevProductData) =>
  //     prevProductData.filter((el) => el.id !== productId)
  //   );
  // };

  const newAdvertisingCreate = (data) => {
    setAdvertisingData((prevAdvertisinData) => [...prevAdvertisinData, data]);
  };

  const productId = (id) => {
    const [selectedProduct] = productsList.filter((el) => el.id === id);
    setProduct((prev) => ({ ...prev, selectedProduct }));
  };

  return (
    <Router>
      <div className="app">
        <HeaderApp />
        <Switch>
          <Route exact path="/">
            <HomeView advertisingData={advertisingData} />
          </Route>
          <Route path="/produkty">
            <ProductsView
              // data={productList}
              categoriesName={categories}
              productId={productId}
            />
          </Route>
          <Route path="/galeria"></Route>
          <Route path="/kontakt">
            <ContactsView />
          </Route>
          <Route path="/admin">
            <AdminPanel
              // newProductCreate={newProductCerate}
              // categoriesName={categories}
              // productData={productData}
              // advertisingData={advertisingData}
              // onProductDelete={productDelete}
              newAdvertisingCreate={newAdvertisingCreate}
            />
          </Route>
          <Route path="/details/:id">
            <ProductDetails productData={product} />
          </Route>
          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
