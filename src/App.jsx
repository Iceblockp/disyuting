import React from "react";
import SecSection from "./components/SecSection";
import SecSection2 from "./components/SecSection2";
import InputFormSection from "./components/InputFormSection";
import ShortMovie from "./components/ShortMovie";

const App = () => {
  return (
    <div className=" overflow-hidden min-h-screen bg-cover bg-center bg-[url('https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Plain-GradientDisyuting.jpg?fbclid=IwAR0lUiyw4t5Tkdh6zRRhTMWtsAqrUG5A6D6HeH_lyu9NPiW5DKAh6QdMYeg')]">
      <SecSection />
      <SecSection2 />
      <InputFormSection />
      <ShortMovie />
    </div>
  );
};

export default App;
