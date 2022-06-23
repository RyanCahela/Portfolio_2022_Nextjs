import React from "react";
import Title2 from "../../Typography/Title2";
import PortfolioPiece from "../Portfolio/PortfolioPiece";

const Portfolio = ({ portfolioData }) => {
  return (
    <section className="pt-6">
      <a id="Portfolio" className="relative -top-20"></a>
      <Title2>Portfolio</Title2>
      <ul className="mt-6 flex flex-col gap-18 md:gap-28">
        {portfolioData.map((data, index) => {
          const reverseOrder = index % 2 === 0;
          return (
            <li key={data.title}>
              <PortfolioPiece
                image={data.images.preview1}
                title={data.title}
                bodyCopy={data.bodyCopy}
                route={data.route}
                reverseOrder={reverseOrder}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Portfolio;
