import React from "react";
import Title2 from "../../Typography/Title2";
import Body2 from "../../Typography/Body2";
import SecondaryButton from "../../Buttons/SecondaryButton";
import Link from "next/link";

const data = {
  title: "Entertainment App",
  bodyCopy:
    "I used a design from frontend mentor to build this app. The frontend is built with React and Styled Components. It calls a backend Express API I built to serve the thumbnail images and json data. The frontend state is managed with a useReducer hook and I had a fun time learning about node readable and writable streams to serve the images and data over http.",
  route: "/PortfolioProject/0",
  technologies: [
    { iconLookupKey: "react", text: "React.js" },
    { iconLookupKey: "styledComponents", text: "Styled Components" },
    { iconLookupKey: "node", text: "Node/Express" },
  ],
  externalUrls: {
    frontendLive: "https://ryan-cahela-entertainment-web-app.netlify.app/",
    backendLive: "https://ryan-entertainment-web-app.herokuapp.com/",
    frontendRepo: "https://github.com/RyanCahela/Entertainment_Web_App",
    backendRepo: "https://github.com/RyanCahela/Entertainment_Web_App_Backend",
  },
  projectBackgroundCopy:
    "This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
  timlapseUrl: "",
  staticPreviewImgSrc: "",
  images: {
    breakpoints: {
      desktop: "900px",
      tablet: "768px",
      mobile: "0px",
    },
    thumbnail: {
      srcSet: {
        desktop:
          "/images/portfolio/desktop/image-portfolio-thumbnail-entertainment.png 540w , /images/portfolio/desktop/image-portfolio-thumbnail-entertainment@2x.png 1080w",
        tablet:
          "/images/portfolio/tablet/image-portfolio-thumbnail-entertainment.png 339w , /images/portfolio/tablet/image-portfolio-thumbnail-entertainment@2X.png 678w",
        mobile:
          "/images/portfolio/mobile/image-portfolio-thumbnail-entertainment.png 311w , /images/portfolio/mobile/image-portfolio-thumbnail-entertainment@2X.png 622w",
      },
    },
    hero: {
      srcSet: {
        desktop:
          "/images/detail/desktop/image-portfolio-hero-entertainment.png 1110w , /images/detail/desktop/image-portfolio-hero-entertainment@2X.png 2220w",
        tablet:
          "/images/detail/tablet/image-portfolio-hero-entertainment.png 689w , /images/detail/tablet/image-portfolio-hero-entertainment@2X.png 1378w",
        mobile:
          "/images/detail/mobile/image-portfolio-hero-entertainment.png 311w , /images/detail/mobile/image-portfolio-hero-entertainment@2X.png 622w",
      },
    },
    preview1: {
      srcSet: {
        desktop:
          "/images/detail/desktop/image-portfolio-preview-1-entertainment.png 635w , /images/detail/desktop/image-portfolio-preview-1-entertainment@2X.png 1270w",
        tablet:
          "/images/detail/tablet/image-portfolio-preview-1-entertainment.png 689w , /images/detail/tablet/image-portfolio-preview-1-entertainment@2X.png 1378w",
        mobile:
          "/images/detail/mobile/image-portfolio-preview-1-entertainment.png 313w , /images/detail/mobile/image-portfolio-preview-1-entertainment@2X.png 626w",
      },
    },
    preview2: {
      srcSet: {
        desktop:
          "/images/detail/desktop/image-portfolio-preview-2-entertainment.png 635w , /images/detail/desktop/image-portfolio-preview-2-entertainment@2X.png 1270w",
        tablet:
          "/images/detail/tablet/image-portfolio-preview-2-entertainment.png 689w , /images/detail/tablet/image-portfolio-preview-2-entertainment@2X.png 1378w",
        mobile:
          "/images/detail/mobile/image-portfolio-preview-2-entertainment.png 313w , /images/detail/mobile/image-portfolio-preview-2-entertainment@2X.png 626w",
      },
    },
  },
};

const Youtube = () => {
  return (
    <section className="pt-6 pb-16">
      <a id="Youtube" className="relative -top-20"></a>
      <Title2>Youtube Channel</Title2>
      <div className="mt-6 flex flex-col md:flex-row gap-14">
        <iframe
          className="w-1/2 aspect-video"
          src="https://www.youtube.com/embed/OmGKFv4Hpf0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <div className="w-1/2 py-6 border-b border-t flex flex-col gap-5">
          <Body2>
            Curious about my abilities? I have a YouTube Channel where I
            celebrate software development and share tips and tricks to write
            better code. The motivation for the channel is to solidify different
            topics I'm learning because research shows the best way to learn
            something is to teach it! Another motivation is to have a solid
            example of my workflow and skillset for potential employers.
          </Body2>
          <Link href="https://www.youtube.com/channel/UCYHuuNa4BVfuQW4H_CSQ8YQ">
            <a target="_blank">
              <SecondaryButton textContent="Go to Channel" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
