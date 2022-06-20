import Header from "../components/Sections/Header/Header";
import Hero from "../components/Sections/Hero/Hero";
import AboutMe from "../components/Sections/About_Me/AboutMe";
import Portfolio from "../components/Sections/Portfolio/Protfolio";
import Contact from "../components/Sections/Contact/Contact";
import Footer from "../components/Sections/Footer/Footer";
import ArrowLeftSVG from "../components/Icons/ArrowLeftSVG";
import ArrowRightSVG from "../components/Icons/ArrowRightSVG";
import CloseSVG from "../components/Icons/CloseSVG";
import DownArrowsSVG from "../components/Icons/DownArrowsSVG";
import HamburgerSVG from "../components/Icons/HamburgerSVG";
import GithubLogoSVG from "../components/Logos/GithubLogoSVG";
import LinkedinLogoSVG from "../components/Logos/LinkedinLogoSVG";
import TwitterLogoSVG from "../components/Logos/TwitterLogoSVG";

export default function Home() {
  return (
    <div className="space-y-3">
      {[
        <ArrowLeftSVG />,
        <ArrowRightSVG />,
        <CloseSVG />,
        <DownArrowsSVG />,
        <HamburgerSVG />,
        <GithubLogoSVG />,
        <LinkedinLogoSVG />,
        <TwitterLogoSVG />,
      ].map((svg, index) => {
        return (
          <div key={index} className="w-5">
            {svg}
          </div>
        );
      })}
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
