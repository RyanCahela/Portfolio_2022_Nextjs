import React from "react";

import Header from "../components/Sections/Header/Header";
import Footer from "../components/Sections/Footer/Footer";

import Title2 from "../components/Typography/Title2";
import Body1 from "../components/Typography/Body1";
import SocialLinks from "../components/ExternalLinks/SocialLinks";
import TextField from "../components/FormElements/TextField";
import TextArea from "../components/FormElements/TextArea";
import PrimaryButton from "../components/Buttons/PrimaryButton";

const Contact = () => {
  return (
    <div className="pt-24 px-8 max-w-[69.375rem] lg:mx-auto">
      <Header />
      <div className="border-t-2 flex flex-col gap-6 border-t-light-gray pt-6 pb-8">
        <Title2>Get in Touch</Title2>
        <Body1>
          I&apos;d love to hear about what you&apos;re working on and how I
          could help. I&apos;m currently looking for a new role and am open to a
          wide range of opportunities. My preference would be to find a position
          in a company in London. But I&apos;m also happy to hear about
          opportunites that don&apos;t fit that description. I&apos;m a
          hard-working and positive person who will always approach each task
          with a sense of purpose and attention to detail. Please do feel free
          to check out my online profiles below and get in touch using the form.
        </Body1>
        <SocialLinks />
      </div>
      <form className="border-t-2 border-t-light-gray pt-8 pb-20 flex flex-col gap-6">
        <Title2>Contact Me</Title2>
        <TextField labelText="Name" />
        <TextField labelText="Email Address" />
        <TextArea labelText="Message" />
        <PrimaryButton textContent="Send Message" isIconVisible={false} />
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
