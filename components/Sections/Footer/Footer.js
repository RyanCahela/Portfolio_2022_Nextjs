import React from "react";
import Link from "next/link";
import MainLogoSVG from "../../Logos/MainLogoSVG";
import SocialLinks from "../../ExternalLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row md:gap-12 px-10 items-center py-14 gap-10 text-center text-white bg-grayish-dark-blue w-screen relative left-1/2 -translate-x-1/2">
      <div className="w-15 h-8">
        <MainLogoSVG />
      </div>
      <nav>
        <ul className="flex flex-col md:flex-row gap-8 uppercase tracking-[2px] text-xs">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#Portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="md:ml-auto">
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
