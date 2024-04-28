import "./App.scss";
import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer";
import HeaderApp from "./components/header-app/header-app";

import { fetchData } from "./services/app";
import {
  Page404,
  HomeView,
  ContactsView,
  ProductsView,
  AdminPanel,
  ProductDetails,
} from "./pages";

const categories = [
  "zefir",
  "ciastka",
  "czekoladki",
  "motti",
  "cukierky",
  "torty musowe",
];

function App() {
  const [productData, setProductData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("product-list"));
    return data ? data : [];
  });

  const [advertisingData, setAdvertisingData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("advertising-data"));
    return data ? data : [];
  });

  useEffect(() => {
    fetchData("http://localhost:5000/products").then((data) => {
      setProductData(data);
      localStorage.setItem("product-list", JSON.stringify(productData));
    });
  }, []);

  useEffect(() => {
    fetchData("http://localhost:5000/advertising").then((data) => {
      setAdvertisingData(data);
      localStorage.setItem("advertising-data", JSON.stringify(advertisingData));
    });
  }, []);

  const newProductCerate = (data) => {
    const { pTitle, pDescription, pPrice } = data;
    if (!pTitle || !pDescription || !pPrice) {
      return;
    }
    setProductData((prevProductData) => [...prevProductData, data]);
  };

  const productDelete = (productName) => {
    setProductData((prevProductData) =>
      prevProductData.filter((el) => el.pTitle !== productName)
    );
  };

  const newAdvertisingCreate = (data) => {
    setAdvertisingData((prevAdvertisinData) => [...prevAdvertisinData, data]);
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
            <ProductsView data={productData} categoriesName={categories} />
          </Route>
          <Route path="/galeria"></Route>
          <Route path="/kontakt">
            <ContactsView />
          </Route>
          <Route path="/admin">
            <AdminPanel
              newProductCreate={newProductCerate}
              categoriesName={categories}
              data={productData}
              onProductDelete={productDelete}
              newAdvertisingCreate={newAdvertisingCreate}
            />
          </Route>
          <Route path="/details/:id">
            <ProductDetails />
          </Route>
          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
