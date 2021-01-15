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
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/Firebase/Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <style>{"body { background-color: #5199FF; }"}</style>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route exact path="/regestration">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/success" component={Success} />
          <PrivateRoute exact path="/catalog" component={Catalog} />
          <PrivateRoute path="/catalog/info" component={Catalog} />
          <PrivateRoute path="/cart" component={Cart} />
          <PrivateRoute path="/cart/order" component={Order} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
