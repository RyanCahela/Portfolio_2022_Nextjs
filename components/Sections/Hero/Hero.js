import React from "react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../public/images/homepage/desktop/image-homepage-hero@2x.jpg";
import Title1 from "../../Typography/Title1";
import PrimaryButton from "../../Buttons/PrimaryButton";

const Hero = () => {
  return (
    <section className="pb-24">
      <Image src={heroImage} alt="computer on a desk" layout="responsive" />
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
    </section>
  );
};

export default Hero;
