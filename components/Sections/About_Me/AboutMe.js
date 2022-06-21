import React from "react";
import Image from "next/image";
import Title2 from "../../Typography/Title2";
import Body1 from "../../Typography/Body1";
import profilePic from "../../../public/images/homepage/desktop/image-homepage-profile@2x.jpg";
import SecondaryButton from "../../Buttons/SecondaryButton";

const AboutMe = () => {
  return (
    <section>
      <Image src={profilePic} alt="Ryan Cahela portrait" layout="responsive" />
      <div className="mt-8 pt-8 pb-[3.125rem] flex flex-col gap-7 border-t border-b border-gray">
        <Title2>About Me</Title2>
        <Body1>
          I&apos;m a junior front-end developer looking for a new role in an
          exciting company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I&apos;m based in London, UK, but I&apos;m happy working remotely and
          have experience in remote teams. When I&apos;m not coding, you&apos;ll
          find me outdoors. I love being out in nature whether that&apos;s going
          for a walk, run or cycling. I&apos;d love you to check out my work.
        </Body1>
        <div className="mt-6">
          <SecondaryButton textContent="Go To Portfolio" href="#" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
