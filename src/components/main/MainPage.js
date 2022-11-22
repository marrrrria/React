import React, { useEffect, useState } from "react";
import SearchBar from "../search/SearchBar";
import './main.scss'
import API from "../API";
import CardsContainer from "../cards/CardsContainer";

export default function MainPage() {

  const api = new API()
  const [cardsInfo, setCardsInfo] = useState([])

  useEffect(() => {
    api.getAllCharacters().then(data => setCardsInfo(data))
    // api.getAllLocations().then(data => console.log(data))
    // api.getAllEpisodes().then(data => console.log(data))
  },[])

  return (
    <div>
      <SearchBar/>
      {cardsInfo.length ? <CardsContainer cardsInfo={cardsInfo}/> : null}
      
      {/* <Filters/> */}
      {/* <Content/> */}
    </div>
  )
  
}