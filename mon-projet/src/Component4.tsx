import React, { useState } from 'react';
import Image4 from './Image4.jpg';


const Component4 = () => {
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
        <img src={Image4} alt="Image 4 " className="project-image" />
      </div>

      <h2>Vous cherchez une société de portage en informatique ?</h2>
      {isHovered && <p>Bonjour 4</p>}
    </div>
  );
};

export default Component4;
