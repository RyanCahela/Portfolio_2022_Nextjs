import React from "react";
import GithubLogoSVG from "../Logos/GithubLogoSVG";
import YoutubeLogoSVG from "../Logos/YoutubeLogoSVG";
import LinkedinLogoSVG from "../Logos/LinkedinLogoSVG";

const SocialLinks = () => {
  return (
    <ul className="flex gap-4">
      <li className="w-6 h-6">
        <a
          href="https://github.com/RyanCahela"
          target="_blank"
          rel="noreferrer">
          <GithubLogoSVG />
        </a>
      </li>
      <li className="w-6 h-6">
        <a
          href="https://www.youtube.com/channel/UCYHuuNa4BVfuQW4H_CSQ8YQ"
          target="_blank"
          rel="noreferrer">
          <YoutubeLogoSVG />
        </a>
      </li>
      <li className="w-6 h-6">
        <a
          href="https://www.linkedin.com/in/ryancahela/"
          target="_blank"
          rel="noreferrer">
          <LinkedinLogoSVG />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
