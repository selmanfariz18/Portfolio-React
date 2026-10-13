import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects";
import Achievements from "./components/Achievements/achievements";
import Certificates from "./components/Certificates/certificates";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import useReveal from "./useReveal";

// old routes (/projects, /certificates …) now jump to their section
const routeToSection = {
  "/projects": "projects",
  "/certificates": "certificates",
  "/achievements": "highlights",
  "/contact": "contact",
};

const Home = () => {
  const { pathname, hash } = useLocation();
  useReveal();

  useEffect(() => {
    const id = hash ? hash.slice(1) : routeToSection[pathname];
    if (!id) return;
    const el = document.getElementById(id);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
  }, [pathname, hash]);

  return (
    <>
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
