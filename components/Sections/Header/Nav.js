import React from "react";
import Link from "next/link";
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

const Nav = ({ isOpen, setIsOpen }) => {
  const styleObj = {
    transform: isOpen ? "translateX(0)" : "",
  };

  return (
    <>
      <Backdrop isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav className={`${navClasses}`} style={styleObj}>
        <ul className="flex flex-col gap-4 uppercase">
          <li>
            <Link href="/">
              <a onClick={(e) => setIsOpen(false)}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#Youtube">
              <a onClick={(e) => setIsOpen(false)}>Youtube</a>
            </Link>
          </li>
          <li>
            <Link href="/#Portfolio">
              <a onClick={(e) => setIsOpen(false)}>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <a onClick={(e) => setIsOpen(false)}>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
