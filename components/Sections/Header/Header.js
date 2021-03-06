import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MainLogoSVG from "../../Logos/MainLogoSVG";
import HamburgerSVG from "../../Icons/HamburgerSVG";
import CloseSVG from "../../Icons/CloseSVG";
import Nav from "./Nav";

const headerClasses = `
  ${/*Layout */ ""}
  fixed
  top-0
  left-0
  right-0
  pt-8
  px-8
  pb-4
  z-30
  flex
  justify-between
  items-center

  max-w-[1110px]
  lg:mx-auto

  ${/*Colors */ ""}
  bg-white
`;

const headerLinkClasses = `
  relative
  pb-1
  px-1
  z-10

  before:w-0
  before:bottom-0
  before:left-0
  before:absolute
  hover:before:w-full
  before:h-1
  before:bg-cyan

  motion-safe:before:transition-[width]
  
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  //used for highlighting when path matches link
  const { asPath } = useRouter();

  return (
    <header className={headerClasses}>
      <div className="md:hidden">
        <div className="w-15">
          <MainLogoSVG />
        </div>
        <div
          className="w-6 fixed top-8 right-8 z-50"
          onClick={(e) => setIsOpen((prevState) => !prevState)}>
          {isOpen ? <CloseSVG /> : <HamburgerSVG />}
        </div>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="hidden md:flex flex-1">
        <div className="w-15">
          <MainLogoSVG />
        </div>
        <nav
          className="ml-auto"
          style={{ transform: isOpen ? "translateX(0)" : "" }}>
          <ul className="flex gap-10 uppercase">
            <li className={headerLinkClasses}>
              <Link href="/">
                <a onClick={(e) => setIsOpen(false)}>Home</a>
              </Link>
            </li>
            <li className={headerLinkClasses}>
              <Link href="/#Youtube">
                <a
                  onClick={(e) => setIsOpen(false)}
                  className={`${asPath === "/#Youtube" ? "text-cyan" : ""}`}>
                  Youtube
                </a>
              </Link>
            </li>
            <li className={headerLinkClasses}>
              <Link href="/#Portfolio">
                <a
                  onClick={(e) => setIsOpen(false)}
                  className={`${asPath === "/#Portfolio" ? "text-cyan" : ""}`}>
                  Portfolio
                </a>
              </Link>
            </li>
            <li className={headerLinkClasses}>
              <Link href="/Contact">
                <a
                  onClick={(e) => setIsOpen(false)}
                  className={`${asPath === "/Contact" ? "text-cyan" : ""}`}>
                  Contact Me
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
