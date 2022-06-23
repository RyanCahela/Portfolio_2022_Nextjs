import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title2 from "../../Typography/Title2";
import Body2 from "../../Typography/Body2";
import SecondaryButton from "../../Buttons/SecondaryButton";

const PortfolioPiece = ({
  image,
  bodyCopy = "no body copy",
  title = "No title",
  route,
}) => {
  return (
    <div>
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={`${title} screenshot`}
      />
      <div className="flex flex-col gap-6 mt-8 pt-6 pb-6 border-t border-b border-gray">
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
