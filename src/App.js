import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Item from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Item product='Dior' price='1000'/>
      <Item product='Gucci' price='1200'/>
    </div>
  );
}

export default App;
