import React from 'react'
import imgTr from"../../img/trash_bin.png"
import star from "../../img/star.png"
import "./style.css"
export default function ItemListFood(props) {

   const {imgsmail , id , dc2,
    name , price , quantities ,
    stt,rate,
     handleInRe , handleRemove 
  } = props ; 
  const rateJSX  = [] ; 
  for (let index = 1; index <= rate; index++) {
    
    rateJSX.push(<img key={index} src={star} alt="" />) ; 
  }
  return (
    
    <tr className={`${props.namePage}__item`}>
    {
        props.namePage=== "manage" &&  <td class="manage__item--img">
        <p>{stt}</p>
    </td>
    }
   
    <td className={`${props.namePage}__item--img img`}>
        <img src={imgsmail} alt=""/>
    </td>
    <td><p>{name} </p></td>
    
    <td><p className='price' >{price } VND</p></td>
{/*  */}
{
        props.namePage=== "manage" &&    <td><div class="rate price">
                    <div class="foodlist__item--rate">
                    {
                      rateJSX
                    }
                    </div>
                   
                </div>
            </td>
    }
  
  <td className={`${props.namePage}__item--quatities`}>
   
     {
        props.namePage === "cart" ? <>
        <button onClick={()=>handleInRe("re" , id)}>-</button>
        <p>{quantities}</p>
        <button onClick={()=>handleInRe("in" , id)}>+</button>
      <button class="remove"
            onClick={()=>handleRemove(id)} 
           value-id ="${id}">
        <img src={imgTr} value-id ="${id}"  />
         </button>
      </>  :  props.namePage === "pay"  ? 
       <p>{quantities}</p> 
       : <p className='dc'>{dc2} </p>
     }
       
        
    
    
   </td>
     
</tr>
  )
}
