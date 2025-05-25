import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/navbar';
import Footer from "./components/Footer/footer";

// Lazy load components
const Home = lazy(() => import('./Home'));
const Projects = lazy(() => import('./components/Projects/projects'));
const Certificates = lazy(() => import('./components/Certificates/certificates'));
const Achievements = lazy(() => import('./components/Achievements/achievements'));
const Contact = lazy(() => import('./components/Contact/contact'));

// Loading component
const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '1.5rem',
    color: 'white'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
