import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title2 from "../../Typography/Title2";
import Body2 from "../../Typography/Body2";
import SecondaryButton from "../../Buttons/SecondaryButton";

const PortfolioPiece = ({
  srcSet,
  breakpoints,
  bodyCopy = "no body copy",
  title = "No title",
  route = "/",
  reverseOrder = false,
}) => {
  return (
    <div
      className={`md:flex md:gap-14 ${reverseOrder ? "flex-row-reverse" : ""}`}>
      <div className="md:basis-1/2 w-full">
        <picture>
          <source
            srcSet={srcSet.desktop}
            media={`(min-width: ${breakpoints.desktop})`}
          />
          <source
            srcSet={srcSet.tablet}
            media={`(min-width: ${breakpoints.tablet})`}
          />
          <source
            srcSet={srcSet.mobile}
            media={`(min-width: ${breakpoints.mobile})`}
          />
          <img src={srcSet.desktop} alt={`${title} screenshot`} />
        </picture>
      </div>
      <div className="md:basis-1/2 flex flex-col gap-6 md:mt-0 mt-8 pt-6 pb-6 border-t border-b border-gray lg:py-24">
        <Title2>{title}</Title2>
        <Body2>{bodyCopy}</Body2>
        <div className="self-start">
          <Link href={route}>
            <a>
              <SecondaryButton textContent="View Project" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPiece;
