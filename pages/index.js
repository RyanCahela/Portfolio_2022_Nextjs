import Header from "../components/Sections/Header/Header";
import Hero from "../components/Sections/Hero/Hero";
import AboutMe from "../components/Sections/About_Me/AboutMe";
import Portfolio from "../components/Sections/Portfolio/Protfolio";
import Contact from "../components/Sections/Contact/Contact";
import Footer from "../components/Sections/Footer/Footer";

export default function Home() {
  return (
    <div className="space-y-3">
      <h1 className="font-serif text-3xl font-bold">
        Jived fox nymph grabs quick waltz
      </h1>

      <p className="font-sans">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
        luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
        tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque.
      </p>
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
