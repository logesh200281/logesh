import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './imageslider.css';

// Import your local images
import image1 from './ass/banner.jpg.crdownload';
import image2 from './ass/banner4.jpg.crdownload';
import image3 from './ass/banner5.jpg.crdownload';
import image4 from './ass/IMG-20210301-WA0002-1-new.jpg.crdownload';
import  logoimage1 from './logo/OIP1.jpg';
import logoimage2 from './logo/OIP.jpg'

const slideshow = [
  {
    URL: image1,
    caption: 'Caption 1',
  },
  {
    URL: image2,
    caption: 'Caption 2',
  },
  {
    URL: image3,
    caption: 'Caption 3',
  },
  {
    URL: image4,
    caption: 'Caption 4',
  },
];

const divstyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '501px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  transition: 'transform 0.2s ease-in-out',
};



function ImageSlider() {
  return (
    <div className='slide-container'>
      <Fade>
        {slideshow.map((image, index) => (
          <div key={index}>
            <div style={{ ...divstyle, backgroundImage: `url(${image.URL})` }}></div>
            
          
           
            <button className="slider-button">  <img src={logoimage1} alt="Logo" className="logoslide" /> EXAMINATION ACCOUNT</button>
            <button className="slider-button1"> <img src={logoimage2} alt="Logo" className="logoslide1" />  APPLY ON LINE PORTAL</button>
          </div>
        ))}
      </Fade>
      
    </div>
    
  );
}

export default ImageSlider;
