import React from 'react'

export default function CommentItem(props) {
    const {name , avatar ,  comment} = props
  return (
    <div class="comment__item">
        <div class="comment__item--avatar">
            <div>
                <img src={avatar} alt=""/>
            </div>
            <p>{name}</p>
        </div>
        <p>{comment}</p>
    </div>
  )
}
