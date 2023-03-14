import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
  return (
    <>
      <li><NavLink className="text-black" to='/'>Home</NavLink></li>
      <li><NavLink className="text-black" to='/about'>About</NavLink></li>
      <li><NavLink className="text-black" to='/services'>Services</NavLink></li>
      <li><NavLink className="text-black" to='/news'>Products</NavLink></li>
      <li><NavLink className="text-black" to='/news'>News</NavLink></li>
      <li><NavLink className="text-black" to='/contact'>Contact Us</NavLink></li>
    </>
  );
};

export default Navlinks;