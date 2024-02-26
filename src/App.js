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


    // {
    //   pTitle: "motti",
    //   pDescription: "Lorem undo",
    //   pPrice: "10.00",
    //   pImg: "20220308_193827-min.jpg"
    // }
function App() {
  const [productData, setProductData] = useState([]);

  useEffect( () => {
    if(localStorage.getItem("product-list")) {
      const productList = JSON.parse(localStorage.getItem("product-list"))
      setProductData((prevProductData) => [...prevProductData, productList]);
    }
    return () => {};
  }, []);
  

  const newProductCerate = (data) => {
    setProductData((prevProductData) => [...prevProductData, data]);
    console.log(data, "data");
    console.log(productData, "pd");
    localStorage.setItem("product-list", JSON.stringify(productData))
  };

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
              <ProductsView data={productData} />
            </Route>
            <Route path="/galeria">
              <p>Galeria</p>
            </Route>
            <Route path="/kontakt">
              <ContactsView />
            </Route>
            <Route path="/admin">
              <AdminPanel newProductCreate={newProductCerate} />
            </Route>
            <Footer />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
