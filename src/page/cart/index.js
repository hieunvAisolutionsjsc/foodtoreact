import React, { useEffect, useState } from 'react'
import ItemListFood from '../../components/ItemListFood'
import CartList from './components/CartList'
import "./style.css"
import CartAPI from './../../common/cart';
import Pay from '../../common/pay';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const [listCart , setListCart] = useState([])
  const cart = new CartAPI();
  const pay = new Pay()
  let totalPrice = 0 ; 
  let totalFood = 0 ; 
  const nav = useNavigate() ; 
  const handleInRe = (type , id  )=>{
          let newData = listCart.map((item)=>{
            return item.id === id  
            ? {
              ...item , 
              quantities : item.quantities+(type === "re" ? -1 : 1)
            } 
            : item
                
          })
          newData = newData.filter((item) =>{
            return item.quantities >= 1
          })
          console.log(newData)
          setListCart(newData)
          cart.setAll(newData)
  }

  const handleRemove = (id)=>{
    let newData ; 
     newData = listCart.filter((item) =>{
      return item.id !== id  
    })
    setListCart(newData)
    cart.setAll(newData)
  }
  useEffect(
      ()=>{
       setListCart(prevState =>{
        return cart.getCart()
       })
      }
    

    , [])
    listCart.forEach(element => {
      totalPrice+=(element.price* element.quantities) ; 
      totalFood+=element.quantities
    });
    const handlePay =()=>{
      pay.setAll(listCart);
      nav("/pay")
    }
  return (
    <div className='cart'>
    <h1>Cart list</h1>
     <div className='container'> 
      <CartList
      handleInRe={handleInRe}
      handleRemove ={handleRemove}
      listCart ={listCart}
      />
      </div>
      <div id="total">
        <div className='total'>
      <p>Số Món :{listCart.length}</p>
            <p>Số lượng : {totalFood}</p>
            <p>Tổng Tiền : {totalPrice} </p>
            </div>
      </div>
      <div className="pay">
    <button id="setpay" onClick={handlePay}>  Thanh toán</button>
    </div>
      </div>
  )
}
