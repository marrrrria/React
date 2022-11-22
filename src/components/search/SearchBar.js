import React, { useEffect } from "react";
import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import API from '../API'

export default function SearchBar() {

  const api = new API()
  const [value, setValue] = React.useState('')

  function changeValue(e) {
    setValue(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()

    // setValue('')
    

  }

  function search(value) {
    // api.searchByCharacters(value)
  }
  
  //Add API to search
  //TASK 3

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)} className="searchbar">
        <div className="absolute"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        <input value={value} onChange={(e) => changeValue(e)} type="text"/>
      </form>
    </div>
  )
}