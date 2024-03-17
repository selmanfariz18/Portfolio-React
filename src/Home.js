import React from 'react';


import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import './App.css'

const Home = () => {


  return (
    // Replace the shorthand <> ... </> with <React.Fragment> ... </React.Fragment>
    <div>

      <Intro />
      <Skills />
      <Works />
    </div>

  );
}

export default Home;
