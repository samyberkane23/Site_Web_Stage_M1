import React, { useState } from 'react';


const Component5 = () => {
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
      <h2>Vous cherchez un(e) stagiaire ou alternant(e)?</h2>
      {isHovered && <p>Bonjour 5</p>}
    </div>
  );
};

export default Component5;
