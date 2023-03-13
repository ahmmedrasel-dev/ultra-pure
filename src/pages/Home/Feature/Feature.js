import React from 'react';
import { FaUsers } from "react-icons/fa";
import { MdOutlineDiversity2 } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import SingleFeture from './SingleFeture';

const Feature = () => {
  const features = [
    {
      "_id": 1,
      "icon": <MdOutlineDiversity2 />,
      "title": "Reliable Sales Service",
      "summary": "simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
    },
    {
      "_id": 2,
      "icon": <FaUsers />,
      "title": "Meet Our Expertise",
      "summary": "simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
    },
    {
      "_id": 3,
      "icon": <RiServiceFill />,
      "title": "Project Solution",
      "summary": "simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
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