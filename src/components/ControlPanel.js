import React from "react";

export default function ControlPanel({getPicture, isChange}) {

  const [topLine, setTopLine] = React.useState('')
  const [bottomLine, setBottomLine] = React.useState('')

  // if(isChange) {
  //   setTopLine('')
  //   setBottomLine('')
  // }
  // console.log(topLine, bottomLine)

  function clearInput() {
    getPicture()
    setTopLine('')
    setBottomLine('')
  }

  return (
    <div>
      <div>
        <input value={topLine} placeholder="Top Row" type="text" onChange={(e) => setTopLine(e.target.value)}/>
        <input value={bottomLine} placeholder="Bottom Row" type="text" onChange={(e) => setBottomLine(e.target.value)}/>
        <button onClick={() => clearInput()}>GET</button>
      </div>
      <div className="mem-description">
        <p className="mem-description__item">{topLine}</p>
        <p className="mem-description__item">{bottomLine}</p>
      </div>
    </div>
    
  )
}