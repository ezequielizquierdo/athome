import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./app/components/Navbar/Navbar";
import HomePage from "./app/containers/homePage/HomePage";
import Accesorios from "./app/containers/accesorios/Accesorios";
import Escritorios from "./app/containers/escritorios/Escritorios";
import Sillas from "./app/containers/sillas/Sillas";
import Sillones from "./app/containers/sillones/Sillones";
import MessageInNavbar from "./app/components/MessageInNavbar/MessageInNavbar";
import ButtonsNav from "./app/components/ButtonsNav/ButtonsNav";
import ItemDetail from "./app/components/ItemDetail/ItemDetail";

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

        <Route exact path="/Accesorios">
          <Accesorios />
        </Route>

        <Route exact path="/Escritorios">
          <Escritorios />
        </Route>

        <Route exact path="/Escritorios/:itemId">
          <ItemDetail />
        </Route>

        <Route exact path="/Sillas">
          <Sillas />
        </Route>

        <Route exact path="/Sillones">
          <Sillones />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
