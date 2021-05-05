import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./app/components/Navbar/Navbar";
import HomePage from "./app/containers/homePage/HomePage";
import Categories from "./app/components/Categories/Categories";
import CartPage from "./app/containers/CartPage/CartPage";
import ItemDetailContainer from "./app/containers/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/products/:id">
          <ItemDetailContainer />
        </Route>

        <Route exact path="/categories/:category">
          <Categories />
        </Route>

        <Route path="/cart">
          <CartPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
