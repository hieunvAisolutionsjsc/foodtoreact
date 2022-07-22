import React, { useEffect, useState } from 'react'
import FormPay from './components/FormPay'
import ListFood from './components/ListFood'

import "./style.css"
import PayAPI from './../../common/pay';
export default function Pay({handleMess}) {
  
  const pay = new PayAPI()
  const [listFood , setListFood] = useState([]) ; 
  let totalPrice = 0 ; 
  useEffect(()=>{
    setListFood(prevState =>{
      return pay.getPay() 
    })

  }, [])
  listFood.forEach(element => {
    totalPrice+=(element.price* element.quantities)
  });
  console.log(listFood)
  return (
    
 <div className="pay">
        <h1>pay list</h1>
        
        <div class="container">
          <div>
        <ListFood 
        listFood={listFood}
        />
      <div class="formpay__top" id="paytop">
             <div class="totalpay">
                <p> total pay  :  {totalPrice} VND</p>
            </div>
            <div class="totalitem">
                <p>total food : {listFood.length}</p>
            </div> 
        </div>
            <div>
            </div>
     
    </div>
    <FormPay handleMess={handleMess} />
    </div>
    
    </div>
 
  )
}
