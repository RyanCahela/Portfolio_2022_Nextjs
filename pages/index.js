import Header from "../components/Sections/Header/Header";
import Hero from "../components/Sections/Hero/Hero";
import AboutMe from "../components/Sections/About_Me/AboutMe";
import Portfolio from "../components/Sections/Portfolio/Portfolio";
import Contact from "../components/Sections/Contact/Contact";
import Footer from "../components/Sections/Footer/Footer";

import fsPromises from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "/portfolioData.json");
  const json = await fsPromises.readFile(filepath, { encoding: "utf-8" });

  const portfolioData = await JSON.parse(json);

  return {
    props: { portfolioData },
  };
}

export default function Home({ portfolioData }) {
  return (
    <div className="space-y-3 px-8 pt-20 md:px-10">
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio portfolioData={portfolioData} />
      <Contact />
      <Footer />
    </div>
  );
}
