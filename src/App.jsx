import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SecSection from "./components/SecSection";
import SecSection2 from "./components/SecSection2";


const App = () => {
  return (
    <div className=" min-h-screen bg-cover bg-center bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Plain-GradientDisyuting.jpg?fbclid=IwAR0lUiyw4t5Tkdh6zRRhTMWtsAqrUG5A6D6HeH_lyu9NPiW5DKAh6QdMYeg')]">
       <NavBar/>
    <Header/>
    <SecSection />
      <SecSection2 />
    </div>
  );
};




export default App;
