import "./App.scss";
import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer";
import HeaderApp from "./components/header-app/header-app";
import HomeView from "./components/home-view/home-view";
import ProductsView from "./components//products-view/products-view";
import ContactsView from "./components/contacts-view/contacts-view";
import AdminPanel from "./components/admin-panel/admin-panel";

const links = ["strona gołówna", "produkty", "galeria", "kontakt", "admin"];
const categories = [
  "torty musowe",
  "zefir",
  "ciastka",
  "czekoladki",
  "motti",
  "cukierky"
];

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const productsList = JSON.parse(localStorage.getItem("product-list"));

    if (productsList) {
      setProductData(productsList);
    }
  }, []);

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
    setProductData(prevProductData => prevProductData.filter(el => el.pTitle !== productName));
    console.log(productData);
    // localStorage.setItem("product-list", JSON.stringify([...productData]));
  }

  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="App">
            <HeaderApp links={links} />
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
                onProductDelete = {productDelete}
              />
            </Route>
            <Footer />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
