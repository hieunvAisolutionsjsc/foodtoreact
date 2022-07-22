import React from 'react'
import CommentItem from './components/CommentItem'

export default function Comments(props) {
    const {comment } = props
  return (
    <div className='comment'>
        <p>Comment</p>
        <div className='container'>

       
        {
            comment.map((item , index)=>{
                return <CommentItem
                
                key={index}
                {...item}
                />
            })
        }
     </div>
    </div>
  )
}
