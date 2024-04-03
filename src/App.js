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
    if (!localStorage.getItem("product-list")) {
      return;
    } else {
      const productList = JSON.parse(localStorage.getItem("product-list"));
      setProductData(productList);
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

  const productDelete = (productId) => {
    // const e = productData.filter(el => el !== productId)
    console.log("eeeeee");
    // setProductData(prevProductData => productData.filter(el => el.pTitle !== productId))
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
                productDelete = {productDelete}
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
