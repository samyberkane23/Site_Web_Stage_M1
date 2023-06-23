import React, { useState } from 'react';


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
      <h2>Vous cherchez à intégrer un projet informatique ?</h2>
      {isHovered && <p>Bonjour 2</p>}
    </div>
  );
};

export default Component2;
