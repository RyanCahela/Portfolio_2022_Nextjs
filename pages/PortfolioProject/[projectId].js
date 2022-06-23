import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import Title1 from "../../components/Typography/Title1";
import Title3 from "../../components/Typography/Title3";
import Header from "../../components/Sections/Header/Header";
import Body2 from "../../components/Typography/Body2";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import Contact from "../../components/Sections/Contact/Contact";
import Footer from "../../components/Sections/Footer/Footer";

const PortfolioProject = ({ data }) => {
  const router = useRouter();
  const { projectId } = router.query;
  const {
    title,
    imgSrc,
    bodyCopy,
    technologies,
    projectBackgroundCopy,
    staticPreviewImgSrc,
    images,
  } = data[projectId];
  return (
    <div className="px-8 pt-28">
      <Header />
      <Image
        src={images.hero.url}
        alt={`${title} screenshot`}
        width={images.hero.width}
        height={images.hero.height}
      />
      <div className="mt-10 py-6 flex flex-col gap-6 border-t-2 border-b-2 border-y-light-gray">
        <Title1>{title}</Title1>
        <Body2>{bodyCopy}</Body2>
        <div>Interaction Design / Front End Development</div>
        <div className="flex gap-4 text-cyan">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <Link href="#">
          <a>
            <SecondaryButton textContent="View Website" />
          </a>
        </Link>
      </div>
      <div className="pt-12 flex flex-col gap-7">
        <Title3>Project Background</Title3>
        <Body2>{projectBackgroundCopy}</Body2>
      </div>
      <div className="pt-10 flex flex-col gap-10">
        <Title3>Static Previews</Title3>
        <div className="flex flex-col gap-8">
          <div>
            <Image
              src={images.preview1.url}
              alt={`${title} screenshot`}
              width={images.preview1.width}
              height={images.preview1.height}
            />
          </div>
          <div className="w-full relative">
            <Image
              src={images.preview2.url}
              alt={`${title} screenshot`}
              width={images.preview2.width}
              height={images.preview2.height}
            />
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

import fsPromises from "fs/promises";
import path from "path";
export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "/portfolioData.json");
  const json = await fsPromises.readFile(filepath);
  const data = await JSON.parse(json);

  return {
    props: { data },
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/PortfolioProject/0", "/PortfolioProject/1"],
    fallback: false,
  };
}

export default PortfolioProject;
