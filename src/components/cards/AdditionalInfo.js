import React, { useEffect, useState } from "react";
import movieIcon from '../../img/movie-icon.png'
import API from "../API";
import ShowCarousel from "./Carousel";

export default function AdditionalInfo({info}) {
  const api = new API()
  const [episodesInfo, setEpisodesInfo] = useState([])

  useEffect(() => {
    // setEpisodesInfo([])
    let eInfo = []
    info.episode.forEach(item => {
    let idEpisode = item.substr(item.lastIndexOf('/')+1); 
    api.getEpisode(idEpisode).then(data => {
      eInfo.push({id: data.id, name: data.name})
      if(info.episode.length === eInfo.length) {
    setEpisodesInfo(eInfo)
  }
    })
  })
  
  
  }, [info])

  function sortEpisode(a,b) {
    return a.id -b.id
  }

  const episodes = episodesInfo.sort(sortEpisode).map(info => {
    return <p key={info.id} className="card__episode"><img className="carc__episode-icon" src={movieIcon} alt="movie" width="180px" height="180px"/> <span>Episode {info.id} {info.name}</span></p>
  })

  return (
    <>
    <div className="additional-card-info">
      <img className="card__character-photo" src={info.image} alt="character"/>
      <div className="additional-info">
        <p>Name: {info.name}</p><br/>
        <p>Gender: {info.gender}</p>
        <p>Species: {info.species}</p>
        <p>Status: {info.status}</p>
        <p>Species: {info.species}</p>
        <p>Location: {info.location.name}</p>
      </div>
      
      
    </div>
    <div className="card__episodes-container">
      {episodes.length ? 
        <ShowCarousel episodes={episodes}/>
        : null}
        {/* {episodes} */}
      
    </div>
    </>
    
    
  )
}