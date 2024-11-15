import React, { useState, useEffect } from 'react';
import c9 from './images/c9.webp';
import c10 from './images/c10.jpg';
import c11 from './images/c11.jpg';
import c12 from './images/c12.jpg';
import c1 from './images/c1.jpg';
import c14 from './images/s4.avif';
import c15 from './images/lr3.jpg';
 // New image source
import "./solarsystem.css";

const images = [c9, c10, c11, c12, c1]; // Assuming these are your image sources

const SolarSystem = () => {
  const [imageIndexes, setImageIndexes] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newImageIndexes = imageIndexes.map(() => Math.floor(Math.random() * images.length));
      setImageIndexes(newImageIndexes);
    }, 2000);

    return () => clearInterval(interval);
  }, [imageIndexes]);

  return (
    <div className="solar-system">
      {imageIndexes.map((index, i) => (
        <div key={i} className={`orbit orbit${i + 1}`}>
          <img src={images[index]} alt={`offer${i + 1}`} className={`planet planet${i + 1}`} />
        </div>
      ))}
      {/* New image animation */}
      <div className="top-to-bottom">
        <img src={c14} alt="newImage" className="falling-image" height="150px" width="150px"/>
      </div>
      <div className="bottom-to-top">
        <img src={c15} alt="newImage" className="rising-image" height="150px" width="150px" />
      </div>
      <svg className="star-mask">
  <defs>
    <mask id="star-mask" x="0" y="0" width="100" height="100">
      <path fill="white" d="M50,0L61.2,36.6H100L68.2,59.3L78.4,100L50,78.7L21.6,100L31.8,59.3L0,36.6H38.8L50,0Z" />
    </mask>
  </defs>
</svg>
    </div>
    
  );
};

export default SolarSystem;
