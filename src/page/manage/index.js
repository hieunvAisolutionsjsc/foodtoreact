import React, { useEffect, useState } from 'react'
import Food from '../../common/food';
import FormAdd from './FormAdd';
import ListManage from './ListManage/index';
import "./style.css"

export default function Manage() {
    const food = new Food()
  const [listFood , setListFood] = useState(food.getFood() ) ; 
  const [search , setSearch] = useState(""); 
  const [loadmore , setLoadMore] = useState(1);
  const [isAdd , setIsAdd] = useState(false)
  const handleLoadMore =()=>{
    setLoadMore(prevState =>{
      return prevState +1;
    })
  }
  const handleOpenAdd =(e)=>{
    setIsAdd(!isAdd)
  }
  useEffect(()=>{
   
    const newFood = search === "" ? food.getFood() 
                                        : food.getFood().filter((item)=>{
                                              return item.name.indexOf(search)!== -1 || 
                                                     item.dc2.indexOf(search)!== -1           
                                          }) ;

    setListFood(prevState =>{
      return  newFood;
    })
  }
  
  , [search])
const handleOnChange = (e)=>{
    setSearch(e.target.value);
}
const handleSubmit =(e)=>{
    e.preventDefault()
}

  return (
    <>
       <header>
<div className="container">
        <div className="search">
            <form action="" id="searchform" onSubmit={handleSubmit}>
               
                <input type="text" 
                name="search" 
                id="search"
                 placeholder="enter name or dic"
                 onChange={handleOnChange}
                 />
                
        </form>
        </div>
       <div className="addnew">
        <div className="container">

            <div className="addnew__btn"            
            id="add"
            onClick={handleOpenAdd}
            >
                <button>Add A Food</button>
            </div>
        </div>
        
       </div>
    </div>
    </header>
    <div className='manage'>
   <div className='container'>
       <div>
        <ListManage 
         listFood ={listFood}
         loadmore={loadmore}
        />
        <div style={listFood.length <= (loadmore*20) ? {display :"none"} :{}} className="loadmore" id="loadmore" onClick={handleLoadMore}>
        <button>Load More</button>
    </div>
       </div>
       </div>
   </div>
   <FormAdd 
    handleOpenAdd={handleOpenAdd}
    isAdd={isAdd}
    setListFood ={setListFood}
   />
    </>
  )
}
