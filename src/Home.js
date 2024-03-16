import React, { useState } from 'react';

import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import './App.css'

const Home = () => {
  // Define the state for isMenuOpen here
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Replace the shorthand <> ... </> with <React.Fragment> ... </React.Fragment>
    <React.Fragment>
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={`main-content ${isMenuOpen ? 'menu-active' : ''}`}>
        <Intro />
        <Skills />
        <Works />
      </div>
    </React.Fragment>
  );
}

export default Home;
