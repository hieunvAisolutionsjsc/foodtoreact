import React from 'react'
import ItemListFood from '../../../../components/ItemListFood'
// import "./style.css"
export default function ListFood(props) {
  const {listFood } = props ; 
  console.log(listFood , "pay")
  return (
   
         <table id="pay">
          <thead >
           <tr>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
           </tr>
           </thead>
           <tbody>
          {
            listFood.map((item , index)=>{
              return  <ItemListFood 
              namePage="pay" 
              key={index}
              {...item}
               />
            })
          } 
      </tbody>
    </table>
    
    
  )
}
