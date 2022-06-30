import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title2 from "../../Typography/Title2";
import Body1 from "../../Typography/Body1";
import profilePic from "../../../public/images/homepage/desktop/image-homepage-profile@2x.jpg";
import SecondaryButton from "../../Buttons/SecondaryButton";

const AboutMe = () => {
  return (
    <section
      id="AboutMe"
      className="w-full md:flex md:gap-24 md:justify-between md:pb-24">
      <div className="w-full relative md:basis-1/3 aspect-square">
        <Image
          src={profilePic}
          alt="Ryan Cahela portrait"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
        />
      </div>
      <div className="md:basis-2/3 mt-8 md:mt-0 pt-8 pb-[3.125rem] flex flex-col gap-7 border-t border-b border-gray">
        <Title2>About Me</Title2>
        <Body1>
          I’m a front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Los Angeles, California, but I’m happy working remotely
          and have experience in remote teams. When I’m not coding, you’ll find
          me at the rock climbing gym or making Youtube videos. I’d love you to
          check out my work.
        </Body1>
        <div className="mt-6">
          <Link href="#Portfolio">
            <a>
              <SecondaryButton textContent="Go To Portfolio" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
