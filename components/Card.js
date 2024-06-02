import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
