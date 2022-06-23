import React from "react";

const backdropClasses = `
  bg-black/30
  z-10
  fixed
  inset-0
  opacity-0
  transition-opacity
  pointer-events-none
`;

const backdropActiveClasses = `
  opacity-100
`;

const Backdrop = ({ isOpen }) => {
  return (
    <div
      className={`${backdropClasses} ${
        isOpen ? backdropActiveClasses : ""
      }`}></div>
  );
};

export default Backdrop;
