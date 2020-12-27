import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import Success from "./components/Order/Success";

import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <style>{"body { background-color: #5199FF; }"}</style>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/catalog">
          <Catalog />
        </Route>
        <Route path="/catalog/info">
          <Catalog />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/cart/order">
          <Order />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
