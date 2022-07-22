import React, { useEffect, useState } from 'react'
import ItemListFood from './../../../../components/ItemListFood/index';
import "./style.css"
import CartAPI from './../../../../common/cart';
export default function CartList(props) {
  const {listCart  , handleInRe , handleRemove} = props
  const cart = new CartAPI() ; 
  
  
  return (
   
  <table id="cart">
     <thead>
           <tr>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
           </tr>
           </thead>
           <tbody>
           {
            listCart.map((item , index)=>{
                    return   <ItemListFood
                      handleInRe ={handleInRe}
                      handleRemove={handleRemove}
                        key={index}
                        namePage="cart" 
                        {...item}
                          />
            })
           }
           </tbody>
      
    </table>
    
 
   
  )
}
