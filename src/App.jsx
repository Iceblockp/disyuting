import React from "react";
import AboutTop from "./components/AboutTop";
import AboutSecond from "./components/AboutSecond";
import AboutAccordian from "./components/AboutAccordian";
import AccordianPart from "./components/AccordianPart";

const App = () => {
  return <div className=" min-h-screen bg-cover bg-center bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Plain-GradientDisyuting.jpg')] ">
  <AboutTop/>
  {/* <AboutSecond/> */}
  <AboutAccordian/>
</div>;

};

export default App;
