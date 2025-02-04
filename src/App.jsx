import React from "react";
import "./App.css";
import Nav from "./Comp/Nav";
import Section from "./Comp/Section";
import SectionBar from "./Comp/SectionBar";
import LastSec from "./Comp/Lastsec";

import img1 from './Assest/img/249b17cd3f2fdc9e6d96c9a9b1f81a72.jpg';
import img2 from './Assest/img/63fd420bb2ae4b275709e4bcdae2e556.jpg';

function App() {
  return (
    <>
      <Nav />
      <Section
        title="Welcome!"
        description="Welcome! a creative web designer dedicated to turning your ideas into stunning digital experiences. Explore my work and get inspired by designs that blend beauty with functionality.
        Feel free to adjust it based on your style or include any additional details that reflect your expertise!"
        imageUrl={img1} 
      />
      <SectionBar
        title="Creative Web Designer Crafting Beautiful & Functional Digital Experiences!"
        description="Driven by passion and creativity, I craft seamless and innovative web designs that not only look stunning but also offer excellent user experiences. Let's turn your vision into reality!"
        
      />
       <Section
        title="Welcome!"
        description="a creative web designer dedicated to turning your ideas into stunning digital experiences. Explore my work and get inspired by designs that blend beauty with functionality.
        Feel free to adjust it based on your style or include any additional details that reflect your expertise!"
        imageUrl={img2} 
        sectionStyle={{ display: 'flex', flexDirection: 'row-reverse' }}
      />
      <LastSec/>

    </>
  );
}

export default App;
