import Header from "../components/Sections/Header/Header";
import Hero from "../components/Sections/Hero/Hero";
import AboutMe from "../components/Sections/About_Me/AboutMe";
import Portfolio from "../components/Sections/Portfolio/Portfolio";
import Contact from "../components/Sections/Contact/Contact";
import Footer from "../components/Sections/Footer/Footer";

export default function Home() {
  return (
    <div className="space-y-3 px-8 pt-20">
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
