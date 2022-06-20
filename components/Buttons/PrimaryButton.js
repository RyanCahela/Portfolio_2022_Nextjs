import React from "react";
import DownArrowsSVG from "../Icons/DownArrowsSVG";

const PrimaryButton = ({ textContent, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className="flex text-white group font-sans tracking-[2px] uppercase bg-dark-blue text-xs hover:bg-cyan transition-colors disabled:bg-light-gray">
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
