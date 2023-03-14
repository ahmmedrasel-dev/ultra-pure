import React from 'react';


const SingleFeture = ({ feature }) => {
  const { icon, title, summary } = feature;
  return (
    <div className='flex flex-col items-center bg-slate-50 rounded-lg p-10 shadow-md'>
      <div className='text-6xl text-warning bg-pure p-4 rounded-full shadow-lg'>{icon}</div>
      <h2 className='py-4 text-2xl font-semibold text-center'>{title}</h2>
      <p className='text-center'>{summary}</p>
    </div>
  );
};

export default SingleFeture;