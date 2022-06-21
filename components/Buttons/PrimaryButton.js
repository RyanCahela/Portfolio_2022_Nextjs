import React from "react";
import DownArrowsSVG from "../Icons/DownArrowsSVG";

const buttonClasses = `
  ${/* Layout */ ""}
  flex

  ${/* Typography */ ""}
  font-sans
  tracking-[2px]
  uppercase
  text-xs
  
  ${/* Colors */ ""}
  text-white
  bg-dark-blue
  hover:bg-cyan

  ${/* Misc */ ""}
  group
  transition-colors
  disabled:bg-light-gray
  disabled:cursor-not-allowed
`;

const PrimaryButton = ({ textContent, disabled = null }) => {
  return (
    <button disabled={disabled} className={buttonClasses}>
      <div className="bg-black/10 h-[48px] w-[48px] flex justify-center items-center">
        <div className="w-[16px] h-[14px] text-cyan group-hover:text-white group-disabled:text-white">
          <DownArrowsSVG />
        </div>
      </div>
      <div className="py-4 px-6">{textContent}</div>
    </button>
  );
};

export default PrimaryButton;
