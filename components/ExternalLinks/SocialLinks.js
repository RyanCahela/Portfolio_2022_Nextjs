import React from "react";
import GithubLogoSVG from "../Logos/GithubLogoSVG";
import TwitterLogoSVG from "../Logos/TwitterLogoSVG";
import LinkedinLogoSVG from "../Logos/LinkedinLogoSVG";

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
