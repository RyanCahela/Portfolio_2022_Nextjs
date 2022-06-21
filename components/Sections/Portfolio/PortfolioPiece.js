import React from "react";
import Image from "next/image";
import Title2 from "../../Typography/Title2";
import SecondaryButton from "../../Buttons/SecondaryButton";

const PortfolioPiece = ({
  imgSrc,
  imgAltText,
  bodyCopy = "no body copy",
  title = "No title",
  route,
}) => {
  return (
    <div>
      <Image src={imgSrc} alt={`${title} screenshot`} />
      <div className="flex flex-col gap-6 mt-8 pt-6 pb-6 border-t border-b border-gray">
        <Title2>{title}</Title2>
        <body2>{bodyCopy}</body2>
        <div className="self-start">
          <SecondaryButton textContent="View Project" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPiece;
