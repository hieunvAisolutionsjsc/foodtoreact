import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Cart from './page/cart';
import Manage from './page/manage';
import List from './page/list';
import Pay from './page/pay';
import Food from './common/food';
import CartAPI from './common/cart';
import PayAPI from "./common/pay";
import { useState, useEffect } from 'react';
import iconSucess from './img/anydo_104098.png'
import Detail from './page/detail';

function App() {
  /// set inital State for all 
  const food = new Food() ;
    food.setLocal() ;
    const cart = new CartAPI() ; 
     cart.getCart() === null && cart.setAll([]) ;
    const pay  = new PayAPI() ; 
    pay.getPay ===null && pay.setAll([]);
    const [mess , setMess] = useState(null);
    const handleMess = (mess)=>{
      setMess(mess)
    }
    useEffect(()=>{
      const time = setTimeout( ()=>{
        setMess(null)
      } , 2000)
      return ()=>{
        clearTimeout(time)
      }
    } , [mess])

  return (
    <Router>
        <nav>
          <ul className='container'>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/manage">Manage</Link>
            </li>
            <div class= {mess===null ? "mess" : `mess mess__active` }  id="mess">
        <div class="container" >
    <div class="img">
        <img src={iconSucess} alt=""/>
    </div>
    <div class="p">{mess}</div>
  </div>
 </div>
          </ul>
        </nav>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/pay" element={<Pay handleMess={handleMess} />} />
          <Route path="/" element={<List handleMess={handleMess} />} />
          <Route path="/detail" element={<Detail handleMess={handleMess} />} />
        </Routes>
       
    </Router>
  );
}

export default App;
