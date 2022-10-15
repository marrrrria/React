import React from "react";

export default function CreateTest() {
  
  const [state, setState] = React.useState({
    name:'',
    lastName:'',
    isFriendly: false,
    gender: 'male',
    like: 'coffee',
  })

  function submitHandler(e) {
    e.preventDefault()
    console.log(JSON.stringify(state));
  }

  function changeHandler(e) {
    // console.log(e)
    const name = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    // const {name, value} = e.target
    setState(state => {
      return {
        ...state,
        [name]: value,
      }
    })
  }


  return (
    <div> 
      <form onSubmit={(e) => submitHandler(e)}>
        <input value={state.name} name="name" type="text" placeholder="Input Name" onChange={(e) => changeHandler(e)}/>
        <input value={state.lastName} name="lastName" type="text" placeholder="Input Last Name" onChange={(e) => changeHandler(e)}/>
        <select name="like" onChange={(e) => changeHandler(e)} value={state.like}>
          <option value="coffee">Coffee</option>
          <option value="coca-cola">Coca-cola</option>
          <option value="juice">Juice</option>
          <option value="tea">Tea</option>
        </select>
        <label><input type="checkbox" name="isFriendly" checked={state.isFriendly} onChange={(e) => changeHandler(e)}/> IS Friendly ?</label>
        <label><input name="gender" value="male" checked={state.gender === "male" ? true : false} type="radio" onChange={(e) => changeHandler(e)}/> Male</label>
        <label><input name="gender" value="female" checked={state.gender === "female" ? true : false} type="radio" onChange={(e) => changeHandler(e)}/> Female</label>
        
        
        <button type="submit">Create</button>
      </form>
      
    </div>
  )
}