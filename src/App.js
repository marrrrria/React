import React from "react";
import MainPage from "./components/main/MainPage";
import AboutUs from "./components/pages/AboutUs";
import Header from './components/Header'
import './app.scss'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from "./components/pages/404";
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <div className="background-app">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about/" element={<AboutUs/>}/>
          {/* <Route path="/product/:id" element={<ProductDetails/>}/> */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
