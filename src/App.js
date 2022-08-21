import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
// import ItemDetail from './ItemDetail';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemList />}> </Route>
        <Route path='/category/:products' element={<ItemList />}> </Route>
        <Route path='/item/:idItem' element={<ItemDetailContainer />}> </Route>
      </Routes>
     
        
    </div>
  );
}

export default App;
