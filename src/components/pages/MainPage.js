import React from "react";
import SearchBar from "../search/SearchBar";
import { Card } from "../cards-block/Card";
import { Navigate, redirect } from "react-router-dom";
import PersonalData from "../PersonalData"

export default function MainPage() {
  console.log(redirect('/about'))
  // if(true) {
  //   return <Navigate to="/about"/>
  // }

  const [personalDataArr, setPersonalDataArr] = React.useState([])

  const [pictureUrl, setPictureUrl] = React.useState('')

  function showPicture(personalData) {
    // setPictureUrl(url)
    setPersonalDataArr(personalDataArr => {
      return [...personalDataArr, personalData]
    })
  }

  const personalCard = personalDataArr.map(item => {
    return (
      <div key={`${item.name}`} className="card-container">
          <div className="card-general">
            <img src={item.pictureUrl} alt="product" width={200} height={200}/>
            <h3>{item.gender}</h3>
          </div><br/>
          <div className="card-additional">
            <p className="card__title">{item.name}</p>
            <p className="card__description">{item.date}</p><br/>
          </div><br/>
          <div className="card-additional-horizontal">
            <p className="card__likes">{item.city}</p>
          </div>
        </div>
    )
  })
 
  return (
    <div>
      <SearchBar/>
      <Card/>
      <PersonalData showPicture={showPicture}/>
      {personalCard}


      {/* <img src={pictureUrl} alt="picture from file input"/> */}
    </div>
  )
  
}