import React from "react";
import Link from "next/link";
import SecondaryButton from "../../Buttons/SecondaryButton";
import Title2 from "../../Typography/Title2";

const Contact = () => {
  return (
    <section className="flex flex-col gap-10 pt-28 pb-20 text-center">
      <Title2>Interested in doing a project together?</Title2>
      <Link href="/contact">
        <a>
          <SecondaryButton textContent="Contact Me" />
        </a>
      </Link>
    </section>
  );
};

export default Contact;
