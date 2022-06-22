import manageImg from "../../../public/images/portfolio/desktop/image-portfolio-manage@2x.jpg";
import bookmarkImg from "../../../public/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";
import fyloImg from "../../../public/images/portfolio/desktop/image-portfolio-fylo@2x.jpg";
import insureImg from "../../../public/images/portfolio/desktop/image-portfolio-insure@2x.jpg";

const portfolioData = [
  {
    imgSrc: manageImg,
    title: "Manage",
    bodyCopy: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    route: "/PortfolioProject/0",
    technologies: ["HTML", "CSS", "Javscript"],
    externalUrl: "http://ryancahela.com",
    projectBackgroundCopy:
      "This project was a front-end  challenge from Frontend Mentor. It&apos;s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
    timlapseUrl: "",
    staticPreviewImgSrc: [manageImg, manageImg],
  },
  {
    imgSrc: bookmarkImg,
    title: "Bookmark",
    bodyCopy: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.`,
    route: "/PortfolioProject/1",
    technologies: ["HTML", "CSS", "Javscript"],
    externalUrl: "http://ryancahela.com",
  },
  {
    imgSrc: insureImg,
    title: "Insure",
    bodyCopy: `This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.`,
    route: "/PortfolioProject/2",
    technologies: ["HTML", "CSS", "Javscript"],
    externalUrl: "http://ryancahela.com",
  },
  {
    imgSrc: fyloImg,
    title: "Fylo",
    bodyCopy: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    route: "/PortfolioProject/3",
    technologies: ["HTML", "CSS", "Javscript"],
    externalUrl: "http://ryancahela.com",
  },
];

export default portfolioData;
