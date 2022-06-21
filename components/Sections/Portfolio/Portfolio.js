import React from "react";
import Title2 from "../../Typography/Title2";
import PortfolioPiece from "../Portfolio/PortfolioPiece";
import manageImg from "../../../public/images/portfolio/desktop/image-portfolio-manage@2x.jpg";
import portfolioData from "../Portfolio/portfolioData";

const Portfolio = () => {
  return (
    <section>
      <Title2>Protfolio</Title2>
      <ul className="mt-6 flex flex-col gap-18">
        {portfolioData.map((data) => (
          <li key={data.title}>
            <PortfolioPiece
              imgSrc={data.imgSrc}
              title={data.title}
              bodyCopy={data.bodyCopy}
              route={data.route}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
