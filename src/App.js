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
  ProductDetails
} from "./pages";

const links = ["strona gołówna", "produkty", "galeria", "kontakt", "admin"];
const categories = [
  "torty musowe",
  "zefir",
  "ciastka",
  "czekoladki",
  "motti",
  "cukierky",
];

function App() {
  const [productData, setProductData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("product-list"));
    return data ? data : [];
  });

  useEffect(() => {
    localStorage.setItem("product-list", JSON.stringify(productData));
  }, [productData]);

  const newProductCerate = (data) => {
    const { pTitle, pDescription, pPrice } = data;
    if (!pTitle || !pDescription || !pPrice) {
      return;
    }
    setProductData((prevProductData) => [...prevProductData, data]);
    localStorage.setItem(
      "product-list",
      JSON.stringify([...productData, data])
    );
  };

  const productDelete = (productName) => {
    setProductData((prevProductData) =>
      prevProductData.filter((el) => el.pTitle !== productName)
    );
  };

  return (
    <Router>
      <div className="app">
        <HeaderApp links={links} />
        <Switch>
          <Route exact path="/">
            <HomeView />
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
            />
          </Route>
          <Route path="/product-details/:productId">
            <ProductDetails data={productData}/>
          </Route>
          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
