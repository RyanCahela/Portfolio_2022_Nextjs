import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/images/homepage/desktop/image-homepage-hero@2x.jpg";
import Title1 from "../../Typography/Title1";
import PrimaryButton from "../../Buttons/PrimaryButton";

const Hero = () => {
  return (
    <section className="pb-24 md:relative">
      <picture>
        <source
          srcSet="/images/homepage/desktop/image-homepage-hero.jpg 1110w, /images/homepage/desktop/image-homepage-hero@2x.jpg 2220w"
          media="screen and (min-width: 900px)"
        />
        <source
          srcSet="/images/homepage/tablet/image-homepage-hero.jpg 688w, /images/homepage/tablet/image-homepage-hero@2x.jpg 1376w"
          media="screen and (min-width: 375px)"
        />
        <source
          srcSet="/images/homepage/mobile/image-homepage-hero.jpg 311w, /images/homepage/mobile/image-homepage-hero@2x.jpg 622w"
          media="screen and (min-width: 250px)"
        />
        <img
          src="/images/homepage/tablet/image-homepage-hero.jpg"
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
