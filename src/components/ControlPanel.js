import React from "react";

export default function ControlPanel({getPicture}) {

  const [topLine, setTopLine] = React.useState('')
  const [bottomLine, setBottomLine] = React.useState('')

  // console.log(topLine, bottomLine)

  return (
    <div>
      <div>
        <input placeholder="Top Row" type="text" onChange={(e) => setTopLine(e.target.value)}/>
        <input placeholder="Bottom Row" type="text" onChange={(e) => setBottomLine(e.target.value)}/>
        <button onClick={() => getPicture()}>GET</button>
      </div>
      <div className="mem-description">
        <p className="mem-description__item">{topLine}</p>
        <p className="mem-description__item">{bottomLine}</p>
      </div>
    </div>
    
  )
}