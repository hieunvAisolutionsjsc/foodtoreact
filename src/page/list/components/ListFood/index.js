import React, { useState } from 'react'
import CardFood from '../../../../components/CardFood'
import "./style.css"
import CartAPI from './../../../../common/cart';
import Pay from './../../../../common/pay';

import { useNavigate } from "react-router-dom";

export default function ListFood(props) {
  const {listFood ,handleMess} = props
 
  const [loadMore , setLoadMore] = useState(1) ; 
   const cart = new CartAPI();
   const pay = new Pay() ; 
   const nav = useNavigate() ; 
   ;
  

  const handleLoadMore =()=>{
    setLoadMore(prevState =>{
      return prevState +1;
    })
  }
  const handleAddCart = (item)=>{
        cart.setCart(item) ; 
        handleMess("Add to card success")
  }
  const  handleBuyNow =(item)=>{
    pay.setAll([]);
        pay.setPay(item); 
        
        nav("/pay");
  }
  console.log(listFood)
  return (
    <div className='foodlist'>
   <p id="titlefood">Danh Sách Đồ Ăn</p>
   <div className='container'>
    {
      listFood.map((item , index)=>{
       return index >= (loadMore*20) ? "" : <CardFood 
        key={index}
        handleBuyNow={handleBuyNow}
        handleAddCart ={handleAddCart}
        {
          ...item
        }
        />
      })
    }
       
       
      
   </div>

   <div class="loadmore" id="loadmore">
    <button style={(loadMore*20) > listFood.length ? {display : "none" } : {} } 
            onClick={handleLoadMore}>Load More</button>
</div>
    </div>
  )
}
