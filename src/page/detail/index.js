import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
 import DetailContent from './compoments/DetailContent'
 import { useLocation } from "react-router-dom"
import Food from '../../common/food';
import "./style.css"
import Comments from './compoments/Comments';
function Detail(props) {
    const {handleMess} = props
    const sampleLocation = useLocation();
    const listFood =  new Food()
    const data = listFood.getFood()
    console.log(data)
    let id = sampleLocation.search.split("=")[1]
    const [food , setFood] = useState(data.find(item => item.id === id));
   
  console.log(food)
    useEffect(()=>{
        // console.log(data)
        // setFood(data.find(item => item.id === id));
    } , [])


  return (
    <div className='fooddetail'>
      
        <DetailContent  handleMess={handleMess} {...food} />
        <Comments  {...food}/>
    </div>
  )
}

Detail.propTypes = {}

export default Detail
