import React from "react";

const buttonClasses = `
  ${/* Layout */ ""}
  py-4
  px-8
  
  ${/* Typography */ ""}
  text-xs  
  tracking-[2px]
  uppercase

  ${/* Colors */ ""}
  bg-white
  text-greyish-dark-blue
  
  
  ${/* Misc */ ""}
  cursor-pointer
  outline
  outline-2
  outline-grayish-dark-blue

  hover:bg-grayish-dark-blue
  hover:text-very-light-gray

  disabled:text-grayish-dark-blue/20
  disabled:outline-grayish-dark-blue/20
  disabled:cursor-not-allowed
  disabled:hover:bg-white
`;

const SecondaryButton = ({ textContent, disabled = null }) => {
  return (
    <button disabled={disabled} className={buttonClasses}>
      {textContent}
    </button>
  );
};

export default SecondaryButton;
