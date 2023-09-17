/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Home.css";
import logo from './LOGO.png';
import image12 from './12.jpg';
import image13 from './naac-img.png';
import image14 from './iso-img.png';
import ImageSlider from "./imageslider";

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
function Content(){
  return(
<div className="content">
  hello
</div>
  );
}

function App() {
  const isMobile = window.innerWidth <= 768; // Define your breakpoint for mobile view

  return (
    <div className="App">
 
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
          <Content />
          {/* Add web-specific content here */}
          
        </div>
      )}
    </div>
  );
}

export default App;
