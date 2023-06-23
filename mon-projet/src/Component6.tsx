import React, { useState } from 'react';


const Component6 = () => {
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
      <h2>Vous cherchez un stage ou alternance ?</h2>
      {isHovered && <p>Bonjour 6</p>}
    </div>
  );
};

export default Component6;
