import React from 'react'

export default function CategoryItem(props) {
    const {img , name ,nameT ,category , changeCategory}  = props ; 

  return (
    <div className={`category__item ${category === nameT}` } value-id="a" onClick={()=>{changeCategory(nameT)}}>
    <p>{name}</p>
    <div className="category__item--img">
        <img src={img} alt="" />
    </div>
</div>
  )
}
