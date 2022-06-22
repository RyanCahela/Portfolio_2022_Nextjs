import React from "react";
import Link from "next/link";
import MainLogoSVG from "../../Logos/MainLogoSVG";
import GithubLogoSVG from "../../Logos/GithubLogoSVG";
import TwitterLogoSVG from "../../Logos/TwitterLogoSVG";
import LinkedinLogoSVG from "../../Logos/LinkedinLogoSVG";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-14 gap-10 text-center text-white bg-grayish-dark-blue w-screen relative left-1/2 -translate-x-1/2">
      <div className="w-15 h-8">
        <MainLogoSVG />
      </div>
      <nav>
        <ul className="flex flex-col gap-8 uppercase tracking-[2px] text-xs">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="flex gap-4">
        <li className="w-6 h-6">
          <a href="https://github.com/RyanCahela">
            <GithubLogoSVG />
          </a>
        </li>
        <li className="w-6 h-6">
          <a href="https://twitter.com/">
            <TwitterLogoSVG />
          </a>
        </li>
        <li className="w-6 h-6">
          <a href="https://www.linkedin.com/">
            <LinkedinLogoSVG />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
