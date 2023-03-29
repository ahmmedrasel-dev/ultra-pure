import React from 'react';
import './loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <div class="ellipsis-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <p className='mt-4'>Loading ...</p>
      </div>
    </div>
  );
};

export default Loader;