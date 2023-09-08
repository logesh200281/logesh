import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Home.css";
import logo from './LOGO.png'; // Import the logo image using the correct path
import image12 from './12.jpg'; // Import the second image using the correct path
import image13 from './naac-img.png'; // Import the third image using the correct path
import image14 from './iso-img.png'; // Import the fourth image using the correct path

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
                <img src={logo} alt="Logo" className='logo' /> {/* Use the imported logo */}
                <img src={image13} alt="Image 13" className='logo' /> {/* Use the imported image */}
                <img src={image14} alt="Image 14" className='logo' /> {/* Use the imported image */}
                <img src={image12} alt="Image 12" className='logo' /> {/* Use the imported image */}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Navbar /> {/* Include the Navbar component */}
            <Hero />
            
            <ImageSlider /> {/* Correctly use the ImageSlider component */}
        </div>
    );
}

export default App;
