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
import iconLookupTable from "../../components/Icons/IconLookupTable";

const PortfolioProject = ({ data }) => {
  const router = useRouter();
  const { projectId } = router.query;
  const {
    title,
    bodyCopy,
    technologies,
    projectBackgroundCopy,
    images,
    externalUrls,
  } = data[projectId];
  return (
    <div className="px-8 pt-28 max-w-[69.375rem] lg:mx-auto">
      <Header />
      <picture>
        <source
          srcSet={images.hero.srcSet.desktop}
          media={`(min-width: ${images.breakpoints.desktop})`}
        />
        <source
          srcSet={images.hero.srcSet.tablet}
          media={`(min-width: ${images.breakpoints.tablet})`}
        />
        <source
          srcSet={images.hero.srcSet.mobile}
          media={`(min-width: ${images.breakpoints.mobile})`}
        />
        <img src={images.hero.srcSet.desktop} alt={`${title} screenshot`} />
      </picture>
      <div className="lg:grid grid-cols-2 gap-x-32">
        <div className="lg:col-start-1 lg:col-end-2">
          <div className="lg:flex lg:flex-col md:grid md:grid-cols-2 mt-10 py-6 flex flex-col gap-6 border-t-2 border-b-2 border-y-light-gray">
            <div>
              <Title1>{title}</Title1>
            </div>
            <div className="md:col-start-2 md:col-end-3 md:row-[1/5] place-self-center">
              <Body2>{bodyCopy}</Body2>
            </div>
            <div>Interaction Design / Front End Development</div>
            <div className="flex flex-col gap-2 text-cyan md:col-start-1">
              {technologies.map(({ text, iconLookupKey }) => (
                <div key={text} className="flex gap-1">
                  <div className="w-[20px]">
                    {iconLookupTable[iconLookupKey]}
                  </div>
                  <div>{text}</div>
                </div>
              ))}
            </div>
            <div className="md:col-start-1 flex flex-col gap-4">
              <Link href={externalUrls.frontendLive}>
                <a>
                  <SecondaryButton textContent="View Website" />
                </a>
              </Link>
              <div className="contents md:flex md:gap-4">
                {externalUrls.frontendRepo && (
                  <Link href={externalUrls.frontendRepo}>
                    <a>
                      <SecondaryButton textContent="View Frontend Repo" />
                    </a>
                  </Link>
                )}
                {externalUrls.backendRepo && (
                  <Link href={externalUrls.backendRepo}>
                    <a>
                      <SecondaryButton textContent="View Backend Repo" />
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:col-end-3">
          <div className="pt-12 flex flex-col gap-7">
            <Title3>Project Background</Title3>
            <Body2>{projectBackgroundCopy}</Body2>
          </div>
          <div className="pt-10 flex flex-col gap-10">
            <Title3>Static Previews</Title3>
            <div className="flex flex-col gap-8">
              <div>
                <picture>
                  <source
                    srcSet={images.preview1.srcSet.desktop}
                    media={`(min-width: ${images.breakpoints.desktop})`}
                  />
                  <source
                    srcSet={images.preview1.srcSet.tablet}
                    media={`(min-width: ${images.breakpoints.tablet})`}
                  />
                  <source
                    srcSet={images.preview1.srcSet.mobile}
                    media={`(min-width: ${images.breakpoints.mobile})`}
                  />
                  <img
                    src={images.preview1.srcSet.desktop}
                    alt={`${title} screenshot`}
                  />
                </picture>
              </div>
              <div className="w-full relative">
                <picture>
                  <source
                    srcSet={images.preview2.srcSet.desktop}
                    media={`(min-width: ${images.breakpoints.desktop})`}
                  />
                  <source
                    srcSet={images.preview2.srcSet.tablet}
                    media={`(min-width: ${images.breakpoints.tablet})`}
                  />
                  <source
                    srcSet={images.preview2.srcSet.mobile}
                    media={`(min-width: ${images.breakpoints.mobile})`}
                  />
                  <img
                    src={images.preview2.srcSet.desktop}
                    alt={`${title} screenshot`}
                  />
                </picture>
              </div>
            </div>
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
