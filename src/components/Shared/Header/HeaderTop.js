import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTop = () => {
  return (
    <div className='bg-primary py-2'>
      <div className='flex justify-between max-w-screen-xl mx-auto'>
        <div className="w-[60%] flex justify-start gap-3 text-white">
          <span className='text-sm'>support@ultrapure.com</span>
          <span className='text-sm'> +880 1678 620 101</span>
          <span className='text-sm'>Masque Road, Mohakhali DOHS, Mohakhali, Dhaka-1200</span>
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