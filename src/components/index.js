import React from "react";
import ControlPanel from "./ControlPanel";
import Mem from "./Mem";
import './index.css'

export default function MemBuilder() {

  const [state, setState] = React.useState({
    // topLine: '',
    // bottomLine: '',
    pictureUrl: '',
    ischange: true,
  })

  function changePicture(url) {
    setState(state => {
      return {
        ...state,
        pictureUrl: url,
      }
    })
  }

  function getPicture() {
    setState(state => {
      return {
        ...state,
        isChange: true,
      }
    })
  }

  function permitChange() {
    setState(state => {
      return {
        ...state,
        isChange: false,
      }
    })
  }

  return (
    <div className="wrapper">
      <div className="container">
        <ControlPanel getPicture={getPicture}/>
        <Mem url={state.pictureUrl} changePicture={changePicture} isChange={state.isChange} permitChange={permitChange}/>
      </div>
    </div>
  )
}