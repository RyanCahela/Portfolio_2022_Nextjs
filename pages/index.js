import Header from "../components/Sections/Header/Header";
import Hero from "../components/Sections/Hero/Hero";
import AboutMe from "../components/Sections/About_Me/AboutMe";
import Portfolio from "../components/Sections/Portfolio/Protfolio";
import Contact from "../components/Sections/Contact/Contact";
import Footer from "../components/Sections/Footer/Footer";
import Title1 from "../components/Typography/Title1";
import Title2 from "../components/Typography/Title2";
import Title3 from "../components/Typography/Title3";
import Body1 from "../components/Typography/Body1";
import Body2 from "../components/Typography/Body2";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import TextArea from "../components/FormElements/TextArea";
import TextField from "../components/FormElements/TextField";

export default function Home() {
  return (
    <div className="space-y-3">
      <Title2>Typography</Title2>
      <Title1>Jived fox nymph grabs quick waltz</Title1>
      <Title2>Jived fox nymph grabs quick waltz</Title2>
      <Title3>Jived fox nymph grabs quick waltz</Title3>
      <Body1>
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
        luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
        tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque.
      </Body1>

      <Body2>
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
        luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
        commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
        tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
        sagittis, mi neque.
      </Body2>

      <Title2>Buttons</Title2>
      <PrimaryButton textContent="About Me" />
      <PrimaryButton textContent="About Me" disabled={true} />
      <div className="flex flex-col items-start gap-4">
        <SecondaryButton textContent="Contact Me" />
        <SecondaryButton textContent="Contact Me" disabled={true} />
      </div>

      <Title2>Form Elements</Title2>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextArea labelText="Message" />
        <TextField />
        <button type="submit">submit</button>
      </form>

      <p className="font-sans"></p>
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
