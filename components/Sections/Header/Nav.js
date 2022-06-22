import React from "react";
import Backdrop from "./Backdrop";

const navClasses = `
  bg-white
  pl-12
  pt-20
  fixed
  h-screen
  top-0
  right-0
  z-40
  w-[70vw]
  translate-x-full
  transition-transform
`;

const Nav = ({ isOpen }) => {
  return (
    <>
      <Backdrop isOpen={isOpen} />
      <nav
        className={`${navClasses}`}
        style={{ transform: isOpen ? "translateX(0)" : "" }}>
        <ul className="flex flex-col gap-4">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
