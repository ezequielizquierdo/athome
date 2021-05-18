import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Footer from "../../components/Footer/Footer";
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx";
import Comingsoon from "../../components/Comingsoon/Comingsoon";
import Categories from "../../components/Categories/Categories";
import Navbar from "../../components/Navbar/Navbar";
import CartPageContainer from "../CartPageContainer/CartPageContainer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/products">
          <ItemListContainer />
        </Route>

        <Route exact path="/products/:id">
          <ItemDetailContainer />
        </Route>

        <Route exact path="/categories/:category">
          <Categories />
        </Route>

        {/* <Route exact path="/sillones">
          <Comingsoon />
        </Route>

        <Route exact path="/accesorios">
          <Comingsoon />
        </Route> */}

        <Route path="/cart">
          <CartPageContainer />
        </Route>

      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
