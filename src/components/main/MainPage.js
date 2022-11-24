import React, { useEffect, useState } from "react";
import SearchBar from "../search/SearchBar";
import './main.scss'
import API from "../API";
import CardsContainer from "../cards/CardsContainer";

export default function MainPage() {
  const [cardsInfo, setCardsInfo] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  function finishLoading() {
    // console.log('fjvhkdfhvf')
    setIsLoading(false)
  }

  const api = new API()
  

  useEffect(() => {
    setTimeout(() => api.getAllCharacters().then(data => {setCardsInfo(data); finishLoading()}).catch(() => {console.log('fbfgbfgbg'); finishLoading()}), 1000)
    // api.getAllLocations().then(data => console.log(data))
    // api.getAllEpisodes().then(data => console.log(data))
  },[])

  function searchValue(value) {
    // console.log('fvdvdffbj')
    setIsLoading(true)
    api.searchByCharacters(value).then(data => {setCardsInfo(data); finishLoading()}).catch(() => {console.log('fbfgbfgbg'); finishLoading()})
  }
// if(isLoading) {
//   return <p style={{height: '100vh', width: '140px', margin: '0 auto', color: 'white', fontSize: '20px'}}>Loading...</p>
// }
  return (
    <div style={{overflow: 'hidden'}}>
      <SearchBar searchValue={searchValue}/>
      
      {isLoading && <p style={{height: '100vh', width: '140px', margin: '0 auto', color: 'white', fontSize: '20px'}}>{isLoading ? 'Loading...' : ''}</p>}
      {cardsInfo.length > 0 && !isLoading && <CardsContainer cardsInfo={cardsInfo}/> }
      
      {/* <Filters/> */}
      {/* <Content/> */}
    </div>
  )
  
}