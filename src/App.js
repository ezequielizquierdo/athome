import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./app/components/Navbar/Navbar";
import HomePage from "./app/containers/homePage/HomePage";
import MessageInNavbar from "./app/components/MessageInNavbar/MessageInNavbar";
import ButtonsNav from "./app/components/ButtonsNav/ButtonsNav";
import ItemDetail from "./app/components/ItemDetail/ItemDetail"
import Categories from "./app/Categories/Categories";

function App() {
  return (
    <BrowserRouter>

      <MessageInNavbar />
      <Navbar />
      
      <ButtonsNav />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/products/:id">
          <ItemDetail />
        </Route>

        <Route exact path="/categories/:category">
          <Categories />
        </Route>

      
      </Switch>

    </BrowserRouter>
  );
}

export default App;
