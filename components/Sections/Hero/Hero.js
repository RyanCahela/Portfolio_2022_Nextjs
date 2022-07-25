import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title1 from "../../Typography/Title1";
import PrimaryButton from "../../Buttons/PrimaryButton";

const Hero = () => {
  return (
    <section className="pb-24 md:relative">
      <picture>
        <source
          srcSet="/images/homepage/desktop/image-homepage-hero.jpeg 1110w, /images/homepage/desktop/image-homepage-hero@2X.jpeg 2220w"
          media="screen and (min-width: 900px)"
        />
        <source
          srcSet="/images/homepage/tablet/image-hero-tablet.jpeg 688w, /images/homepage/tablet/image-hero-tablet@2X.jpeg 1376w"
          media="screen and (min-width: 375px)"
        />
        <source
          srcSet="/images/homepage/mobile/image-hero-mobile.jpeg 311w, /images/homepage/mobile/image-hero-mobile@2X.jpeg 622w"
          media="screen and (min-width: 250px)"
        />
        <img
          src="/images/homepage/tablet/image-hero-tablet.jpeg"
          alt="computer on a desk"
        />
      </picture>
      <div className="md:absolute md:bottom-24 md:left-0 w-fit md:bg-white md:pt-14 md:pr-14 md:mr-44">
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
