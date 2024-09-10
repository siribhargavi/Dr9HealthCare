import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const texts = [
    "Your health is our priority. Book your tests and checkups now!",
    "Experience fast and accurate reports for all your health tests.",
    "Convenient at-home tests, available at your fingertips.",
    "Trust our experts for comprehensive checkups and healthcare solutions."
  ];

  const images = [
    "/images/banner.png",
    "/images/banner2.png",
   
  ];

  // Change the text and image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change the text and image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts.length, images.length]);

  return (
    <div className="centered-text">
      <div className="text-overlay">
      {texts[textIndex]}
       </div>
  
      <img src={images[imageIndex]} alt="Healthcare" className="centered-image" />
      
    </div>
  );
}

export default Banner;
