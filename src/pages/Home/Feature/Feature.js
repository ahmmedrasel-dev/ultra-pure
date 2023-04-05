import React from 'react';
import { HiUserGroup } from "react-icons/hi2";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import SingleFeture from './SingleFeture';

const Feature = () => {
  const features = [
    {
      "_id": 1,
      "icon": <FaHandHoldingWater />,
      "title": "Customized Solutions",
      "summary": "Customized solutions for each client based on water quality issues, usage patterns, and regulatory requirements ensure maximum effectiveness and efficiency."
    },
    {
      "_id": 2,
      "icon": <HiUserGroup />,
      "title": "Experienced Staff",
      "summary": "Our experienced staff of engineers and technicians are experts in the latest water treatment technologies and methods, ensuring effective solutions for our clients."
    },
    {
      "_id": 3,
      "icon": <MdWorkspacePremium />,
      "title": "Hight Quality Products",
      "summary": "We offer high-quality water treatment products, including filtration systems, water softeners, and reverse osmosis systems, ensuring long-lasting solutions for our clients."
    }
  ]
  return (
    <div className='grid lg:grid-cols-3 gap-8 grid-cols-1 lg:p-20 p-4'>
      {
        features.map(item => <SingleFeture
          key={item._id}
          feature={item}
        ></SingleFeture>)
      }
    </div>
  );
};

export default Feature;