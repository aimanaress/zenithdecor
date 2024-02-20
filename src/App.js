import React from "react";
import NavBar from "./components/Navigation/NavBar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Card/Cards";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="flex flex-col">
        <div className="flex bg-background items-center justify-center">
          <div className="w-[70rem]">
            <Hero />
            <Cards />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
