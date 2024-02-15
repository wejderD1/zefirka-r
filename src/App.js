import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer";
import HeaderApp from "./components/header-app/header-app";
import HomeView from "./components/home-view/home-view";
import ProductsView from "./components//products-view/products-view";
import ContactsView from "./components/contacts-view/contacts-view";
import AdminPanel from "./components/admin-panel/admin-panel";

const links = ["strona gołówna", "produkty", "galeria", "kontakt"];

function App() {
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
              <ProductsView />
            </Route>
            <Route path="/galeria">
              <p>Galeria</p>
            </Route>
            <Route path="/kontakt">
              <ContactsView />
            </Route>
            <Route path="/admin-wejder">
              <AdminPanel />
            </Route>
            <Footer />
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
