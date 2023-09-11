import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Home.css";
import logo from './LOGO.png';
import image12 from './12.jpg';
import image13 from './naac-img.png';
import image14 from './iso-img.png';
import ImageSlider from "./imageslider";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className="header">
      <nav ref={navRef}>
        <a href="./Home.js">Home</a>
        <a href="/about">About</a>
        <a href="/services">Department</a>
        <a href="/portfolio">COURSES</a>
        <a href="/contact">ADMISSION</a>
        <a href="/contact">ACTIVITIES</a>
        <a href="/contact">ACADEMICS</a>
        <a href="/contact">MEDIA</a>
        <a href="/contact">NIRF</a>
        <a href="/contact">GALLERY</a>
        <a href="/contact">CONTACT US</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="image-container">
        <img src={logo} alt="Logo" className='logo' />
        <img src={image13} alt="Image 13" className='logo' />
        <img src={image14} alt="Image 14" className='logo' />
        <img src={image12} alt="Image 12" className='logo' />
      </div>
    </div>
  );
}

function App() {
  const isMobile = window.innerWidth <= 768; // Define your breakpoint for mobile view

  return (
    <div className="App">
      <Navbar />
      {isMobile ? (
        // Content to display on mobile view
        <div>
          <h1>Mobile View Content</h1>
          {/* Add mobile-specific content here */}
        </div>
      ) : (
        // Content to display on web view
        <div>
          <Hero />
          <ImageSlider />
          {/* Add web-specific content here */}
        </div>
      )}
    </div>
  );
}

export default App;
