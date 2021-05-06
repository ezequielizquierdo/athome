import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./app/components/Navbar/Navbar";
import HomePage from "./app/containers/homePage/HomePage";
import Categories from "./app/components/Categories/Categories";
import CartPage from "./app/containers/CartPage/CartPage";
import ItemDetailContainer from "./app/containers/ItemDetailContainer/ItemDetailContainer";
import Footer from "./app/components/Footer/Footer";
import ItemListContainer from "./app/containers/ItemListContainer/ItemListContainer";
import Comingsoon from "./app/components/Comingsoon/Comingsoon";

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

        <Route exact path="/products">
          <ItemListContainer />
        </Route>

        <Route exact path="/categories/:category">
          <Categories />
        </Route>

        <Route exact path="/sillones">
          <Comingsoon />
        </Route>

        <Route exact path="/accesorios">
          <Comingsoon />
        </Route>

        <Route path="/cart">
          <CartPage/>
        </Route>

      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
