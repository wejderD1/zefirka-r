import "./App.scss";
import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer";
import HeaderApp from "./components/header-app/header-app";

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

  const [advertisingData, setAdvertisingData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("advertising-data"));
    return data ? data : [];
  });

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
              categoriesName={categories}
            />
          </Route>
          <Route path="/galeria"></Route>
          <Route path="/kontakt">
            <ContactsView />
          </Route>
          <Route path="/admin">
            <AdminPanel
              // newProductCreate={newProductCerate}
              categoriesName={categories}
              // productData={productData}
              // advertisingData={advertisingData}
              // onProductDelete={productDelete}
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
