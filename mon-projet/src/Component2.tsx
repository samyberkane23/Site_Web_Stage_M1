import React, { useState } from 'react';
import Image2 from './Image2.jpg';


const Component2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`component-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image-container">
        <img src={Image2} alt="Image 2" className="project-image" />
      </div>

      <h2>Vous cherchez à intégrer un projet informatique ?</h2>
      {isHovered && <p>Bonjour 2</p>}
    </div>
  );
};

export default Component2;
