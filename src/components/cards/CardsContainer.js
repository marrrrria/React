import React from "react";
import Card from "./Card";
import "./cards.scss"
import ModalCard from "./ModalCard";

export default function CardsContainer({cardsInfo}) {
  let cards = cardsInfo.map(item => <ModalCard key={item.id} info={item}/>)

  return (
    <div className="cards-container">
      {cards}
      {/* <Modal component={<Card info={cardsInfo[0]}/>}/> */}
    </div>
  )
}