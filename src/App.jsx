import React from "react";
import AboutTop from "./components/AboutTop";
import AboutSecond from "./components/AboutSecond";
import AboutAccordian from "./components/AboutAccordian";
import AccordianPart from "./components/AccordianPart";
import AboutJourney from "./components/AboutJourney";
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
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Map from "./components/Map";

const App = () => {
  return (
    <div className=" min-h-screen bg-cover bg-center bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Plain-GradientDisyuting.jpg?fbclid=IwAR0lUiyw4t5Tkdh6zRRhTMWtsAqrUG5A6D6HeH_lyu9NPiW5DKAh6QdMYeg')]">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
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

              <Footer />
            </>
          }
        ></Route>
        <Route
          path="about"
          element={
            <>
              <AboutTop />
              <AboutSecond />
              <AboutJourney />
              <Awards />
              <Team />
              <AboutAccordian />
              <InputFormSection />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="ourProject"
          element={
            <>
              <AboutTop />
              <Header />
              <TopVisual />
              <Testimonial />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="pages"
          element={
            <>
              <AboutTop />
              <PhotoInput /> <Pricelist /> <AboutAccordian /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="contactUs"
          element={
            <>
              <AboutTop /> <AboutSecond />
              <Testimonial />
              <Map />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
