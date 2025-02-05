import React from "react";
import "./App.css";
// proj1
// import Nav from "./CompProj1//Nav";
// import Section from "./CompProj1//Section";
// import SectionBar from "./CompProj1/SectionBar";
// import LastSec from "./CompProj1/Lastsec";
// import img1 from './Assest1/img/249b17cd3f2fdc9e6d96c9a9b1f81a72.jpg';
// import img2 from './Assest1/img/63fd420bb2ae4b275709e4bcdae2e556.jpg';

//proj2
import NavBar from "./CompProj2//NavBar";
import LoopCard from "./CompProj2/LoopCard";
import image1 from "./Assest2/img/w.png"
import image2 from "./Assest2/img/pp.jpeg"
import Home from "./CompProj2/Home";
import Home2 from "./CompProj2/Home2";
import Footer from "./CompProj2/Footer";

import InputForm from '../src/CompProj3/InputForm';
function App() {

  return (
    <>
    {/* Project 1 */}

      {/* <Nav />
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
      <LastSec/> */}

      {/* Project 2 */}



      <NavBar/>
      <Home title="Shop Now" description="Get the Best Products for skin care" imageUrl={image2} />
      <LoopCard/>
      <Home2 title="Shop Now" description="Get the Best Products for skin care" imageUrl={image1} />
      <Footer/> 
      {/* project 3 */}
      <InputForm/>

      

    </>
  );
}

export default App;