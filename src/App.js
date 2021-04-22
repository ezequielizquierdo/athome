import React from 'react'
import './App.css';
import NavBar from './app/components/NavBar/NavBar'
import CoverContainer from './app/components/CoverConteiner/Cover'
import ItemCount from './app/components/ItemCount/ItemCount';
import ItemListContainer from './app/components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <CoverContainer/>
      <ItemListContainer/>
      <ItemCount/>
    </div>
  );
}

export default App;
