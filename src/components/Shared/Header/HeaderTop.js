import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className='bg-secondary py-2 lg:block hidden'>
      <div className='flex justify-between max-w-screen-xl mx-auto'>
        <div className="w-[60%] flex justify-start gap-3 text-pure">
          <span className='text-sm flex items-center gap-2'><FaEnvelope /> support@ultrapure.com</span>
          <span className='text-sm flex items-center gap-2'><FaPhone /> +8801860629988</span>
          <span className='text-sm flex items-center gap-2'><FaMapMarker /> Eastern Housing, Basherpool Demra, Dhaka.</span>
        </div>
        <div className="w-[40%] flex justify-end gap-3 text-white">
          <span><Link>Career</Link></span>
          <span><Link>Support</Link></span>
          <span><Link>Faq</Link></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;