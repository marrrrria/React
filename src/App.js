import MainPage from "./components/pages/MainPage";
import AboutUs from "./components/pages/AboutUs";
import Header from './components/Header'
import ProductDetails from "./components/cards-block/ProductDetails";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import NotFound from "./components/pages/404";

function App() {

  

  return (
    <div>
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          {/* <Route path="/" 
                  element={true ? <Navigate to="/about/"/> : <MainPage/>}
          /> */}

          <Route path="/about/" element={<AboutUs/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        
        {/* <MainPage/> */}
      </Router>
            
    </div>
  );
}

export default App;
