import React from "react";
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Portfolio from "./Sections/Portfolio";


const App = () => {
  return (
    <div className = "container mx-auto max-w-7xl">
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
      <section className= "min-h-screen"  />
      {/* <section className= "min-h-screen"  />
      <section className= "min-h-screen"  />
      <section className= "min-h-screen"  />
      <section className= "min-h-screen"  />
      <section className= "min-h-screen"  /> */}
    {/* projects */}
    {/* experience */}
    {/* testimonial */}
    {/* contact */}
    {/* footer */}
    </div>
  );
};

export default App