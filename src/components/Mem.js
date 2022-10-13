import React, { useEffect }  from "react";
import API from "./Api/API";

export default function Mem({url, changePicture, isChange, permitChange}) {
  let api = new API()

  function getPicture() {
    api.getPicture().then((url) => {
        changePicture(url)
      })
  }

  useEffect(() => {
    getPicture()
  }, [])

  useEffect(() => {
    if(isChange) {
      getPicture()
      permitChange() 
    }
      
  })

  return (
    <div>
      <img src={url} alt="mem" width="400px"/>
    </div>
  )
}