import React from "react";
import SearchBar from "../search/SearchBar";
import Card from "../cards-block/Card";
import Header from "../Header";

export default function MainPage() {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <Card/>
    </div>
  )
}