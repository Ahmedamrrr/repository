import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import OrderOnline from './OrderOnline';
import Login from './Login';
import './index.css';
import './animations.css';
import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
      <Header>
      </Header>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/reservations' element={<Reservations/>}></Route>
          <Route path='/orderonline' element={<OrderOnline/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Main>
      </Main>
      <Footer>
      </Footer>
    </>
  );
}

export default App;

