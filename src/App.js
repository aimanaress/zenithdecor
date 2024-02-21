import React from "react";
import NavBar from "./components/Navigation/NavBar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Card/Cards";
import Collection from "./components/Collection/Collection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-background">
      <NavBar />
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="w-[70rem]">
            <Hero />
            <Cards />
            <Collection />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
