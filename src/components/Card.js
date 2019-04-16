import React from 'react';
import '../card.css'

const Card=({title, content})=>{
  console.log(title)
  return <div className="Card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
}

export default Card;