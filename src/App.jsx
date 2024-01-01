import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SecSection from "./components/SecSection";
import SecSection2 from "./components/SecSection2";
import Production from "./components/Production";
import Awards from "./components/Awards";
import PhotoInput from "./components/PhotoInput";
import Pricelist from "./components/Pricelist";
import InputFormSection from "./components/InputFormSection";
import Team from "./components/Team";
import TopVisual from "./components/TopVisual";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

import Map from "./components/Map";

const App = () => {
  return (
    <div className=" min-h-screen bg-cover bg-center bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Plain-GradientDisyuting.jpg?fbclid=IwAR0lUiyw4t5Tkdh6zRRhTMWtsAqrUG5A6D6HeH_lyu9NPiW5DKAh6QdMYeg')]">
      <NavBar />
      <Header />
      <SecSection />
      <SecSection2 />
      <Production />
      <Awards />
      <PhotoInput />
      <Pricelist />
      <InputFormSection />
      <Team />
      <TopVisual />
      <Testimonial />

      <Map />

      <Footer />
    </div>
  );
};

export default App;
