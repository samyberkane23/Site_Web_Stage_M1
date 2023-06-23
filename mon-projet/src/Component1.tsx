import React, { useState } from 'react';
import Image1 from './Image1.jpg';


const Component1 = () => {
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
        <img src={Image1} alt="Image 1" className="project-image" />
      </div>

      <h2>Vous avez un projet informatique ou un besoin à nous confier ?</h2>
      {isHovered && <p>Boujour 1  </p>}
    </div>
  );
};

export default Component1;
