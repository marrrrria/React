import React, { useEffect } from "react";

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
      <form onSubmit={(e) => submitHandler(e)}>
        <input value={value} onChange={(e) => changeValue(e)} type="text"/><icon>search</icon>
      </form>
    </div>
  )
}