import React from 'react'
import star from "../../img/star.png"
import food from "../../img/danhmuc/a.jpg"
import { useNavigate } from 'react-router-dom';
export default function CardFood(props) {
  const {name , imgsmail ,
    contry , dc ,
    imgbig , restaurant , 
    comment , 
     rate , price , dc2 ,
     id , handleAddCart,
    handleBuyNow } = props;
    const data = {
           name, imgbig ,
            restaurant , contry ,
             dc ,dc2 , comment ,
              id ,imgsmail , 
              price , rate
    }
    
 
  const nav = useNavigate() ; 
 
const handleDetail = ()=>{
      nav(`/detail?id=${id}`)
}
  const rateJSX  = [] ; 
  for (let index = 1; index <= rate; index++) {
    
    rateJSX.push(<img key={index} src={star} alt="" />) ; 
  }
  return (
    <div className="foodlist__item">
    <div className="foodlist__item--img">
   
        <img src={imgsmail} alt="" onClick={handleDetail}/>
    </div>
 <p onClick={handleDetail}>{name}</p>
    <div className="rate price">
        <div className="foodlist__item--rate">
          {
            rateJSX
          }
  
        
         
        </div>
        <p>{price} VND</p>
    </div>
    <p className="dic">
       {dc2}
    </p>
    <div className="addcart ">
        <button className="fooddetail__content--addcart tocart" onClick={() =>handleAddCart(data)} >Add To Cart</button>
        <button className="fooddetail__content--buy buy" onClick={()=> handleBuyNow(data)}>Buy Now</button>
    </div>
</div>
  )
}
