import React, { useState } from "react";
import MainLogoSVG from "../../Logos/MainLogoSVG";
import HamburgerSVG from "../../Icons/HamburgerSVG";
import CloseSVG from "../../Icons/CloseSVG";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between items-center pt-8 pb-10">
      <div className="w-15">
        <MainLogoSVG />
      </div>
      <div
        className="w-6"
        onClick={(e) => setIsOpen((prevState) => !prevState)}>
        {isOpen ? <CloseSVG /> : <HamburgerSVG />}
      </div>
    </header>
  );
};

export default Header;
