import React from 'react'
import './App.css';
import NavBar from './app/components/NavBar/NavBar'
import ItemListContainer from './app/components/ItemListContainer/ItemListContainer'
import ItemCount from './app/components/ItemCount/ItemCount';

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <ItemListContainer/>
      <ItemCount/>

    </div>
  );
}

export default App;
