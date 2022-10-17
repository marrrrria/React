import React from "react";
import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faThumbsUp, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { Link } from 'react-router-dom'

const data = [
    {
      id: 1,
      img: 'https://i.pinimg.com/564x/fd/5a/53/fd5a53339e851a066b39e07d377e59c5.jpg',
      url: '/1',
      price: '20', //if haven't that 'SOLD OUT'
      title: 'Sweet',
      description: 'You can buy it if you want to feel some warm with your clithes and do you think about your hands? You can warm it with our gloves)',
      likesCount: 100,
      watchesCount: 300,
      date: '16/02/14',
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/564x/fd/5a/53/fd5a53339e851a066b39e07d377e59c5.jpg',
      url: '/2',
      price: '', //if haven't that 'SOLD OUT'
      title: 'Sweet',
      description: 'You can buy it if you want to feel some warm with your clithes and do you think about your hands? You can warm it with our gloves)',
      likesCount: 500,
      watchesCount: 1700,
      date: '01/12/16',
    },
    {
      id: 3,
      img: 'https://i.pinimg.com/564x/fd/5a/53/fd5a53339e851a066b39e07d377e59c5.jpg',
      url: '/3',
      price: '50', //if haven't that 'SOLD OUT'
      title: 'Sweet',
      description: 'You can buy it if you want to feel some warm with your clithes and do you think about your hands? You can warm it with our gloves)',
      likesCount: 5760,
      watchesCount: 25600,
      date: '25/06/20',
    },
    {
      id: 4,
      img: 'https://i.pinimg.com/564x/fd/5a/53/fd5a53339e851a066b39e07d377e59c5.jpg',
      url: '/4',
      price: '20', //if haven't that 'SOLD OUT'
      title: 'Sweet',
      description: 'You can buy it if you want to feel some warm with your clithes and do you think about your hands? You can warm it with our gloves)',
      likesCount: 100,
      watchesCount: 300,
      date: '16/02/14',
    },
    {
      id: 5,
      img: 'https://i.pinimg.com/564x/fd/5a/53/fd5a53339e851a066b39e07d377e59c5.jpg',
      url: '/5',
      price: '20', //if haven't that 'SOLD OUT'
      title: 'Sweet',
      description: 'You can buy it if you want to feel some warm with your clithes and do you think about your hands? You can warm it with our gloves)',
      likesCount: 100,
      watchesCount: 300,
      date: '16/02/14',
    },
    {
      id: 6,
      img: 'https://i.pinimg.com/564x/fd/5a/53/fd5a53339e851a066b39e07d377e59c5.jpg',
      url: '/6',
      price: '20', //if haven't that 'SOLD OUT'
      title: 'Sweet',
      description: 'You can buy it if you want to feel some warm with your clithes and do you think about your hands? You can warm it with our gloves)',
      likesCount: 100,
      watchesCount: 300,
      date: '16/02/14',
    },
  ]

function Card({ history }) {

  function goToPage(url) {
    console.log(url)
    history.push(`/product${url}`)

  }

  function likeHandler(e) {
    e.preventDefault()
  }

  function shareHandler(e) {
    e.preventDefault()
  }

  let result = data.map(item => {
    return (
      <Link key={`hi${item.id}`} to={`/product${item.url}`}>
        <div className="card-container">
          <div className="card-general">
            <img src={item.img} alt="product"/>
            <h3>{item.price ? `${item.price}$` : 'SOLD OUT'}</h3>
          </div><br/>
          <div className="card-additional">
            <p className="card__title">{item.title}</p>
            <p className="card__description">{item.description}</p><br/>
            <p className="card__date" onClick={(e) => shareHandler(e)}>{item.date}<FontAwesomeIcon icon={faShareNodes}/></p>
          </div><br/>
          <div className="card-additional-horizontal">
            <p className="card__likes">{item.likesCount}<FontAwesomeIcon icon={faThumbsUp}/></p>
            <p className="card__watches">{item.watchesCount}<FontAwesomeIcon icon={faEye}/></p>
          </div> 
          <div className="icon-heart" onClick={(e) => likeHandler(e)}>
            <FontAwesomeIcon icon={faHeart}/>
            {/* <FontAwesomeIcon icon={faHeart}/> */}
          </div>
        </div>
      </Link>
      

    
    )
  })


  return (
    <div className="card-wrapper">
      {result}
    </div>
    
  )
}



export { Card, data }