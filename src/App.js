import React, { useState } from 'react';

import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import './App.css'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="App">
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={`main-content ${isMenuOpen ? 'menu-active' : ''}`}>

        <Intro />
        <Skills />
        <Works />
      </div>

    </div>
  );
}

export default App;
