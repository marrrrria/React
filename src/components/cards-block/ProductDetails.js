import React from "react";
import { useParams } from "react-router-dom";
import { data } from './Card'

export default function ProductDetails() {
  let param = useParams()
  let item = data.find(item => item.id === +param.id)

  return (
    <div>
      <h1>This is product details</h1>
      <div>
        <img src={item.img} alt="product"/>
        <h3>{item.price ? `${item.price}$` : 'SOLD OUT'}</h3>
      </div><br/>
      <div>
        <p>{item.title}</p>
        <p>{item.description}</p><br/>
        <p>{item.date}</p>
      </div><br/>
      <div>
        <p>{item.likesCount}</p>
        <p>{item.watchesCount}</p>
      </div>
      <div>
      </div>
    </div>
  )
}