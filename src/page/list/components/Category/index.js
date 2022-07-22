import React from 'react'
import { categoryList } from '../../../../varlocal'
import CategoryItem from './components/CategoryItem'
import "./style.css"
export default function Category(props) {
     console.log(props)
  return (
    <div className='category'>
        <h1>Danh Mục</h1>
       <div className='container'>
   {
    categoryList.map((item , index)=>{
        return <CategoryItem  
        {...props}
        key={index}
        {
            ...item
        } /> 
    })
   }
   </div>
   </div>
  )
}
