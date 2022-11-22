import React from 'react'

export default function Card({info, showCard}) {
  return (
    <div className='card' onClick={() => showCard(info.id)}>
      <img src={info.image} alt="character"/>
      <p>{info.name}</p>
    </div>
  )
}