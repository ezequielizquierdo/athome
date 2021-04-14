import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
