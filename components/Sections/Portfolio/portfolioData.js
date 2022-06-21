import manageImg from "../../../public/images/portfolio/desktop/image-portfolio-manage@2x.jpg";
import bookmarkImg from "../../../public/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";
import fyloImg from "../../../public/images/portfolio/desktop/image-portfolio-fylo@2x.jpg";
import insureImg from "../../../public/images/portfolio/desktop/image-portfolio-insure@2x.jpg";

const portfolioData = [
  {
    imgSrc: manageImg,
    title: "Manage",
    bodyCopy: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    route: "/PortfolioProject/1",
  },
  {
    imgSrc: bookmarkImg,
    title: "Bookmark",
    bodyCopy: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.`,
    route: "/PortfolioProject/2",
  },
  {
    imgSrc: insureImg,
    title: "Insure",
    bodyCopy: `This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.`,
    route: "/PortfolioProject/3",
  },
  {
    imgSrc: fyloImg,
    title: "Fylo",
    bodyCopy: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    route: "/PortfolioProject/4",
  },
];

export default portfolioData;
