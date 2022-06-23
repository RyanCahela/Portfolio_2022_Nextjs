import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/images/homepage/desktop/image-homepage-hero@2x.jpg";
import Title1 from "../../Typography/Title1";
import PrimaryButton from "../../Buttons/PrimaryButton";

const Hero = () => {
  return (
    <section className="pb-24 md:relative">
      <Image src={heroImage} alt="computer on a desk" layout="responsive" />
      <div className="md:absolute md:bottom-24 md:left-0 md:w-[32.125rem] md:h-[17.375rem] md:bg-white md:pt-14">
        <div className="pt-6 pb-8">
          <Title1>
            Hi, I&apos;m Ryan Cahela and I love building beautiful websites
          </Title1>
        </div>
        <Link href="/#Portfolio">
          <a>
            <PrimaryButton textContent="Portfolio" />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
