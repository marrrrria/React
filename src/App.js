import React, {useState, useEffect} from "react";
import MainPage from "./components/pages/MainPage";
import AboutUs from "./components/pages/AboutUs";
import Header from './components/Header'
import ProductDetails from "./components/cards-block/ProductDetails";

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from "./components/pages/404";

function App() {

  const [subI, setSubI] = useState('')
  Promise.resolve(true).then(res => {
      setSubI('REQUEST111')
    })


  
  const a = <div>{subI}</div>

  return (
    <div>
      {a}
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about/" element={<AboutUs/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
