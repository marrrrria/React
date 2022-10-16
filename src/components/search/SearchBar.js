import React, { useEffect } from "react";
import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar() {

  const [value, setValue] = React.useState('')

  function changeValue(e) {
    console.log(value)
    setValue(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    // search(value)
    setValue('')
  }

  useEffect(() => {
    setValue(localStorage.getItem('searchValue'))
    return () => {
      // localStorage.setItem('searchValue', value)
    }
  },[])
  

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)} className="searchbar">
        <div className="absolute"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
        <input value={value} onChange={(e) => changeValue(e)} type="text"/>
        
      </form>
    </div>
  )
}