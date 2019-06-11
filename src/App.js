import React from 'react';
import './CSS/App.css';
import './CSS/NavigationBar.css'
// -------------- import comps
import SkillsSection from "./sections/SkillsSection"
import TitleAndIcons from "./sections/TitleAndIons";
import AboutSection from "./sections/AboutSection";
import NavigationBar from "./components/NavigationBar";
import { Element } from "react-scroll";


function App() {
  return (
    <div >
      <NavigationBar />
      <Element name="HomeLocation" className="element" />
      <TitleAndIcons />
      <Element name="AboutLocation" className="element" />
      <AboutSection id="aboutSec"/>
      <Element name="SkillLocation" className="element" />
      <SkillsSection id="skillSec"/>
    </div>   
  );

}
export default App;
