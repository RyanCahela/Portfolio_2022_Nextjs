import React from "react";
import DownArrowsSVG from "../Icons/DownArrowsSVG";

const buttonClasses = `
  ${/* Layout */ ""}
  flex
  w-50

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

const PrimaryButton = ({
  textContent,
  disabled = null,
  isIconVisible = true,
}) => {
  return (
    <button disabled={disabled} className={buttonClasses}>
      {isIconVisible ? (
        <div className="bg-black/10 h-[48px] w-[48px] flex justify-center items-center">
          <div className="w-[16px] h-[14px] text-cyan group-hover:text-white group-disabled:text-white">
            <DownArrowsSVG />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="py-4 text-center w-full">{textContent}</div>
    </button>
  );
};

export default PrimaryButton;
