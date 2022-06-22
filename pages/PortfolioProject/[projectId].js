import React from "react";
import { useRouter } from "next/router";

import Title1 from "../../components/Typography/Title1";
import portfoioData from "../../components/Sections/Portfolio/portfolioData";
import Header from "../../components/Sections/Header/Header";

const PortfolioProject = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const data = portfoioData[projectId];
  return (
    <div>
      <Header />
      <Title1>{data.title}</Title1>
      <p>{projectId}</p>
    </div>
  );
};

export default PortfolioProject;
