import React, { useState } from "react";
import MainLogoSVG from "../../Logos/MainLogoSVG";
import HamburgerSVG from "../../Icons/HamburgerSVG";
import CloseSVG from "../../Icons/CloseSVG";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-30 flex justify-between items-center pt-8 px-8 pb-4">
      <div className="w-15">
        <MainLogoSVG />
      </div>
      <div
        className="w-6 fixed top-8 right-8 z-50"
        onClick={(e) => setIsOpen((prevState) => !prevState)}>
        {isOpen ? <CloseSVG /> : <HamburgerSVG />}
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
