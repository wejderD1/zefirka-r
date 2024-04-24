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
  "torty musowe"
];

function App() {
  const [links, setLinks] = useState([
    "strona gołówna",
    "produkty",
    "galeria",
    "kontakt",
    "admin",
  ]);

  const [productData, setProductData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("product-list"));
    return data ? data : [];
  });

  const [advertisingData, setAdvertisingData] = useState([
    {
      aTitle: "Hello",
      aDesc: "Lorem ipsum",
      aNote: "sdfsdf sdf s",
      aImg: "20220308_193827.jpg"
    }
  ])


  useEffect(() => {
    fetchData("http://localhost:5000/products").then((data) => {
      setProductData(data);
    });

  }, []);

  useEffect(() => {
    localStorage.setItem("product-list", JSON.stringify(productData));
  }, [productData]);

  const newProductCerate = (data) => {
    const { pTitle, pDescription, pPrice } = data;
    if (!pTitle || !pDescription || !pPrice) {
      return;
    }
    setProductData((prevProductData) => [...prevProductData, data]);
    // localStorage.setItem(
    //   "product-list",
    //   JSON.stringify([...productData, data])
    // );
  };

  const productDelete = (productName) => {
    setProductData((prevProductData) =>
      prevProductData.filter((el) => el.pTitle !== productName)
    );
  };

  const newAdvertisingCreate = (data) => {
    setAdvertisingData((prevAdvertisinData) => [...prevAdvertisinData, data])
  }

  return (
    <Router>
      <div className="app">
        <HeaderApp links={links} />
        <Switch>
          <Route exact path="/">
            <HomeView advertisingData={advertisingData}/>
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
            <ProductDetails link={links}/>
          </Route>
          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
