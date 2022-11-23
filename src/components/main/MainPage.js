import React, { useEffect, useState } from "react";
import SearchBar from "../search/SearchBar";
import './main.scss'
import API from "../API";
import CardsContainer from "../cards/CardsContainer";

export default function MainPage() {

  const api = new API()
  const [cardsInfo, setCardsInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.getAllCharacters().then(data => {setCardsInfo(data); setIsLoading(false)})
    // api.getAllLocations().then(data => console.log(data))
    // api.getAllEpisodes().then(data => console.log(data))
  },[])

  function searchValue(value) {
    api.searchByCharacters(value).then(data => setCardsInfo(data))
  }

  return (
    <div>
      <SearchBar searchValue={searchValue}/>
      {cardsInfo.length && !isLoading ? <CardsContainer cardsInfo={cardsInfo}/> : <p>Loading...</p>}
      
      {/* <Filters/> */}
      {/* <Content/> */}
    </div>
  )
  
}