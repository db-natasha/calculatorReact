import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button:React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border bg-[#E6E6E6] p-2 m-1 w-12 h-12 text-xl text-[#2D384B] rounded-xl"
    >
      {title}
    </button>
  );
};

export default Button;