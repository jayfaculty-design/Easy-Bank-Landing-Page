import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="cursor-pointer bg-gradient-to-r from-lime-green to-bright-cyan w-fit px-8 py-3 text-white rounded-full">
      {label}
    </button>
  );
};

export default Button;
