import React from 'react'
import './App.css';
import Navbar from './app/containers/Navbar/Navbar';
import CoverContainer from './app/containers/Cover/CoverContainer';
import ItemListContainer from './app/containers/ItemListContainer/ItemListContainer';
import ItemCount from './app/components/ItemCount/ItemCount';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <CoverContainer/>
      <ItemListContainer/>
      <ItemCount/>
    </div>
  );
}

export default App;
