import React from "react";
import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/myskill";
import Works from "./Components/Portfolio/portfolio";
import Contact from "./Components/Contacts/contact";
import Foot from "./Components/Footer/foot";

const Portfolio = () => {
return(
  <div className="Portfolio">
    <Navbar />
    <Intro />
    <Skills />
    <Works />
    <Contact />
    <Foot />
  </div>
);
}

export default Portfolio;