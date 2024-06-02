import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
