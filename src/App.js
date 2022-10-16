import React from "react";
import Conditional from "./components/Conditional";
import LogIn from "./components/LogIn";

function App() {

  const [state, setState] = React.useState({
    isLoggedIn: false,
    wrong: false,
  })

  function login(data) {
    let parametrs = JSON.parse(data)
    if(parametrs.login === "masha23" && parametrs.password === "12345") {
      setState(state => {
        return {
          ...state,
          isLoggedIn: true,
        }
      })
    } else {
      setState(state => {
        return {
          ...state,
          wrong: true,
        }
      })
    }
  }

    return (
    <div>
      {state.isLoggedIn ? <Conditional/> : <LogIn login={login} wrong={state.wrong}/>}
    </div>
    );
  
}

export default App;
