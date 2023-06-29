import React, { useState } from 'react';
import Image2 from './Image2.jpg';

const Component2 = () => {
  return (

      <div className="position-relative">
        <img src={Image2} alt="Image 2" className="project-image img-fluid" />
        
          <div className="text-overlay position-absolute bottom-0 start-0 w-100 text-center">
            <h2 className="text-white mb-0">Vous avez un projet informatique ou un besoin à nous confier ?</h2>
          </div>
        
      </div>
  );
};

export default Component2;
