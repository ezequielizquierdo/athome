import React from "react";
import "./App.css";
import Navbar from "./app/containers/Navbar/Navbar";
import CoverContainer from "./app/containers/Cover/CoverContainer";
import ItemCount from "./app/components/ItemCount/ItemCount";
import ItemListContainer from "./app/containers/ItemListContainer/ItemListContainer";
import ButtonBases from "./app/containers/Cover/TextInCover/ButtonBases";
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="container">

    <BrowserRouter>

      <Navbar />
      <CoverContainer />
      <ButtonBases/>
      <ItemListContainer/>
      <ItemCount />

    </BrowserRouter>

    </div>

  );
}

export default App;
