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
import { useSelector } from "react-redux";

const categories = [
  "zefir",
  "ciastka",
  "czekoladki",
  "motti",
  "cukierky",
  "torty musowe",
];

function App() {
  return (
    <Router>
      <div className="app">
        <HeaderApp />
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/produkty">
            <ProductsView categoriesName={categories} />
          </Route>
          <Route path="/galeria"></Route>
          <Route path="/kontakt">
            <ContactsView />
          </Route>
          <Route path="/admin">
            <AdminPanel
              categoriesName={categories}
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
