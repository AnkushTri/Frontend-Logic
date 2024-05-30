import React from 'react';

const ProgressBar = ({ value, max }) => {
  //{ value, max }
  // let value=60;
  // let max=100;
  const percentage = (value / max) * 100;

  return (
    <div className="w-full h-6 bg-gray-200 rounded-lg overflow-hidden my-4">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
