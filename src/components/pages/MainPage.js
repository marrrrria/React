import React from "react";
import SearchBar from "../search/SearchBar";
import { Card } from "../cards-block/Card";
import { Navigate, redirect } from "react-router-dom";

export default function MainPage() {
  console.log(redirect('/about'))
  if(true) {
    return <Navigate to="/about"/>
  }
  return (
    <div>
      <SearchBar/>
      <Card/>
    </div>
  )
  
}