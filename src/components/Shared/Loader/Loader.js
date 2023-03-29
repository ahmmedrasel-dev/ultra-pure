import React from 'react';
import './loader.css';
import logo from '../../../assets/images/logo.png';

const Loader = () => {
  return (
    <div class="container">
      <div class="main">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Loader;
