import React from 'react';

const Card = ({ color, rotate, number, text }) => {
  return (
    <div
      className="w-[296px] h-[302.16px] rounded-4xl font-primary"
      style={{ backgroundColor: color, transform: `rotate(${rotate})` }}
    >
      {/* Card content */}
      <div className="flex flex-col justify-center items-center p-4 w-full h-full">
        <h2 className="text-white text-8xl font-bold leading-32">
          {number}+
        </h2>
        <p className="text-white text-4xl font-bold leading-32 text-ellipsis">{text}</p>
      </div>
    </div>
  );
};

export default Card;
