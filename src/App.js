import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Certificates from './components/Certificates/certificates';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import NavBar from './components/NavBar/navbar';
import Home from './Home';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div>
      <BrowserRouter>
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className={`main-content ${isMenuOpen ? 'menu-active' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </div>
        
      </BrowserRouter>
      
    </div>
  );
  }

export default App;
