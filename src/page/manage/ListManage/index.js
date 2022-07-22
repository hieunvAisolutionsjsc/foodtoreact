import React, { useEffect, useState } from 'react'
import ud from '../../../img/up-and-down-opposite-double-arrows-side-by-side.png'
import u from "../../../img/up-arrow.png"
import d from "../../../img/down-arrow.png"
import ItemListFood from './../../../components/ItemListFood/index';
export default function ListManage(props) {
  const {listFood , loadmore  } = props;
  const [listFood2 , setListFood2] = useState([])

  const [sortName , setSortName] = useState({
    name : "name" , 
    status : "none"
  });
  const [sortPrice , setSortPrice] = useState({
    name : "price" , 
    status : "none"
  });
  const [sortRate , setSortRate] = useState({
    name : "rate" , 
    status : "none"
  });
  const [sortDc , setSortDc] = useState({
    name : "dc2" , 
    status : "none"
  });
  useEffect(()=>{
    console.log(listFood)
    setListFood2(listFood);
  } , [])
  const onChangeSort = (e)=>{
    const sortSet = [{
      set :  setSortName , 
      value : sortName
    },
    {
      set :  setSortDc , 
      value : sortDc
    },
    {
      set :  setSortPrice , 
      value : sortPrice
    },
    {
      set :  setSortRate , 
      value : sortRate
    }
  ]
  const sortItem = (name , kind , data)=>{
    console.log(data)
let newData ;
if(name ==="name" || name === "dc2"){
    newData =  kind === "in"   ? data.sort((a, b) => a[name].localeCompare(b[name]))
                                : data.sort((a, b) => b[name].localeCompare(a[name]));
}
     newData =  kind === "in"   ? data.sort((a ,b) => {
        
        return  parseInt(a[name])-parseInt(b[name])}) 
     : data.sort((a ,b) => {return  parseInt(b[name])-parseInt(a[name])}) ;
    return data
}
  sortSet.forEach(element => {
     if(element.value.name === e.target.id){
      console.log(element.value)
        element.set(prevState=>{
          console.log(prevState)
            return {
              ...prevState ,  
              status : element.value.status === "in" ? "re" : "in"
            }
        }) ;
        setListFood2(prevState =>{
          return sortItem(element.value.name , element.value.status , listFood2)
        })
     }else{
      element.set(prevState =>{
        return {
          ...prevState , 
          status : "none"
        }
      })
     }
  });
   
  }
  return (
   <table > 
    <thead>
     <tr>
        <th>STT</th>
        <th>Image</th>
        <th>Name
       
         <div className="sort-icon "  onClick={onChangeSort}>
          {
            sortName.status === "in" ?   <img src={u} alt="" id='name'/> 
            : (sortName.status=== "re") ?  <img src={d} alt="" id='name'/> : 
            <img src={ud} alt="" id='name'/>
          }
      
        {/* <img src={u} alt=""/>
        <img src={d} alt="" /> */}
        </div>
         </th>
         
        
        <th>Price
        <div className="sort-icon "  onClick={onChangeSort} >
        {
            sortPrice.status === "in" ?   <img src={u} alt="" id='price'/> 
            : (sortPrice.status=== "re") ?  <img src={d} alt="" id='price'/> : 
            <img src={ud} alt="" id='price'/>
          }
        </div>
        </th>
            <th>Rate
            <div className="sort-icon "  onClick={onChangeSort}>
            {
            sortRate.status === "in" ?   <img src={u} alt="" id='rate'/> 
            : (sortRate.status=== "re") ?  <img src={d} alt="" id='rate'/> : 
            <img src={ud} alt="" id='rate'/>
          }
            </div>
        </th>
        <th>Describe
        <div className="sort-icon "  onClick={onChangeSort}>
     
        {
            sortDc.status === "in" ?   <img src={u} alt="" id='dc2'/> 
            : (sortDc.status=== "re") ?  <img src={d} alt="" id='dc2'/> : 
            <img src={ud} alt="" id='dc2'/>
          }
        </div>
        </th>
       </tr>
       </thead>
       <tbody>
       {
        listFood2.map((item , index)=>{
          return  index < (loadmore*20) &&  <ItemListFood 
          namePage="manage"
          key={index}
          stt={index+1}
          {...item}
          />
        })
       }
   </tbody>
      
   </table>
  )
}
