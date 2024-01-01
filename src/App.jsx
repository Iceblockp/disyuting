import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SecSection from "./components/SecSection";
import SecSection2 from "./components/SecSection2";
import Production from "./components/Production";
import Awards from "./Awards";
import PhotoInput from "./components/PhotoInput";
import Pricelist from "./Pricelist";
import InputFormSection from "./components/InputFormSection";
import Team from "./components/Team";
import TopVisual from "./components/TopVisual";
import Testimonial from "./components/Testimonial";
import { Routes,Route } from "react-router-dom";



const App = () => {
  return (
        <div className=" min-h-screen bg-cover bg-center bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Plain-GradientDisyuting.jpg?fbclid=IwAR0lUiyw4t5Tkdh6zRRhTMWtsAqrUG5A6D6HeH_lyu9NPiW5DKAh6QdMYeg')]">
        <NavBar/>
    <Routes>
      <Route path="/" element={<Header/>}></Route>
      <Route path="about" element={<Production/>} ></Route>
      <Route path="ourProject" element={<Production/>} ></Route>
      <Route path="pages" element={<Production/>} ></Route>
      <Route path="contactUs" element={<Production/>} ></Route>
      </Routes>
      
    </div>
    
  );
};




export default App;
