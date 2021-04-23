import React from "react";
import "./App.css";
import Navbar from "./app/containers/Navbar/Navbar";
import CoverContainer from "./app/containers/Cover/CoverContainer";
import ItemCount from "./app/components/ItemCount/ItemCount";
import ListContainer from "./app/containers/ListContainer/ListContainer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <CoverContainer />
      <ListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
