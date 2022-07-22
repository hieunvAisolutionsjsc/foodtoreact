import React from 'react'
import { useNavigate } from 'react-router-dom';
import CartAPI from '../../../../common/cart';
import Pay from '../../../../common/pay';


export default function DetailContent(props) {
    
    const {imgbig , dc , name , price , dc2 , id  , restaurant , handleMess} =props
console.log(props)

const cart = new CartAPI();
const pay = new Pay() ; 
const nav = useNavigate() ; 
;



const handleAddCart = ()=>{
    const item = {...props}
     cart.setCart(item) ; 
     handleMess("Add to card success")
}
const  handleBuyNow =(items)=>{
    console.log(items)
 pay.setAll([]);
 //console.log(item)
 const item = {...items};
     pay.setPay(item); 
     
    nav("/pay");
}
  return (
    <div  className="container " id="fooddetail">
        <div className="fooddetail__img">
    <img src={imgbig} alt=""/>
</div>
<div className="fooddetail__content"> 
    <p>{name}</p>
        <div className="fooddetail__content--rate fooddetail__content--price">
            <div className="fooddetail__content--rate item">
              
            </div>
            <p>{price} VND</p>
        </div>
        <div className="fooddetail__content--res item">
            <p>Cung cấp bởi nhà hàng  : {restaurant.name}</p>
            <p>Địa chỉ  : {restaurant.address}</p>
        </div>
        
        <div className="fooddetail__content--dic">
            <p>Miêu Tả</p>
            <p>
          {dc2}
        </p>
        </div>
        <div className="addcart">
            <button className="fooddetail__content--addcart tocart"
            onClick={handleAddCart}
            >Add To Cart</button>
            <button className="fooddetail__content--buy buy" 
            onClick={()=> handleBuyNow(props)}
            >Buy Now</button>
        </div>
        
</div>
</div>
  )
}
