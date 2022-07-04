import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Container /> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
