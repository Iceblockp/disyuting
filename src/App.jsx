import React from "react";
import Awards from "./Awards";
import Pricelist from "./Pricelist";

const App = () => {
  return (
    <div className=" min-h-screen  bg-cover bg-center  bg-[url(https://templates.casloop.net/disyuting/wp-content/uploads/sites/19/2023/11/Plain-GradientDisyuting.jpg?fbclid=IwAR1l3hPtEQzywMASaZUJ143jLTh01TkIcSjerpbaaO076i9XAzjXVSHcAyg)]">
      <Awards />
      <Pricelist />
    </div>
  );
};

export default App;
