import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Certificates from './components/Certificates/certificates';
import Contact from './components/Contact/contact';
import Projects from './components/Projects/projects';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <div className="App">
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
