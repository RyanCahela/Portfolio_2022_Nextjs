import React from "react";
import Title2 from "../../Typography/Title2";
import PortfolioPiece from "../Portfolio/PortfolioPiece";
import manageImg from "../../../public/images/portfolio/desktop/image-portfolio-manage@2x.jpg";

const manageBodyCopy =
  "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.";

const Portfolio = () => {
  return (
    <section>
      <Title2>Protfolio</Title2>
      <ul className="mt-6 flex flex-col gap-18">
        <li>
          <PortfolioPiece
            imgSrc={manageImg}
            title="Manage"
            bodyCopy={manageBodyCopy}
          />
        </li>
        <li>
          <PortfolioPiece
            imgSrc={manageImg}
            title="Manage"
            bodyCopy={manageBodyCopy}
          />
        </li>
        <li>
          <PortfolioPiece
            imgSrc={manageImg}
            title="Manage"
            bodyCopy={manageBodyCopy}
          />
        </li>
        <li>
          <PortfolioPiece
            imgSrc={manageImg}
            title="Manage"
            bodyCopy={manageBodyCopy}
          />
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
