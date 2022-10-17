import React from "react";

export default function LogIn({login, wrong}) {

  const [state, setState] = React.useState({
    login:'',
    password:'',
  })

  function changeHandler(e) {
    const {name, value} = e.target
    setState(state => {
      return {
        ...state,
        [name]: value,
      }
    })
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log(state)
    login(JSON.stringify(state))
    setState(state => {
      return {
        ...state,
        login:'',
        password:'',
      }
      
    })
  }

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
      <input value={state.login} placeholder={wrong ? "ERROR" : "login"} name="login" type="text" onChange={(e) => changeHandler(e)}/>
      <input value={state.password} placeholder={wrong ? "ERROR" : "password"} name="password" type="text" onChange={(e) => changeHandler(e)}/>
      <button>Log In</button>
    </form>
    </div>
  
  )
}