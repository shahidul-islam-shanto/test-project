import React from "react";
import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Review from './component/review/Review';
import Manege from "./component/manege/Manege"; 
import NotFound from "./component/notFound/NotFound";
import Details from "./component/details/Details";

 function App() {
  return (
    <>
       <Header></Header>
      
     <BrowserRouter>
     <Routes>
          <Route exact path="/" element={<Shop></Shop>}/>
          <Route path="/home" element={<Shop></Shop>}/>
          <Route path="/review" element={<Review></Review>}/>
          <Route path="/manege" element={<Manege></Manege>}/>
          <Route path="/product/:productKey" element={<Details></Details>}/>
          <Route path="/*" element={<NotFound></NotFound>}/>
      </Routes>
      
     </BrowserRouter>
      
    </>
  );
}

export default App;
