import React, { useEffect, useState } from 'react'
import Food from '../../common/food';
import Category from './components/Category/index';
import ListFood from './components/ListFood';

export default function List({handleMess}) {
  const food = new Food()
  const [listFood , setListFood] = useState([]) ; 
  const [category , setCategory] = useState("all");
  const [loadMore , setLoadMore] = useState(1) ; 
  const changeCategory = (name) =>{
 
           setCategory(name)
  }
  const handleLoadMore =()=>{
    setLoadMore(prevState =>{
      return prevState +1;
    })
  }
  useEffect(()=>{
    console.log(category)
    const newFood = category === "all" ? food.getFood() 
                                        : food.getFood().filter((item)=>{
                                              return item.contry === category           
                                          }) ;

    setListFood(prevState =>{
      return  newFood;
    })
  }
  
  , [category])
   
  return (
    <div>
      <Category changeCategory={changeCategory} category={category}/>
      
      <ListFood  listFood={listFood} handleMess={handleMess}/>
      
    </div>
  )
}
