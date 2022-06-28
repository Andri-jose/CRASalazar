import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Container from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container />
    </div>
  );
}

export default App;
