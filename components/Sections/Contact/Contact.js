import React from "react";
import Link from "next/link";
import SecondaryButton from "../../Buttons/SecondaryButton";
import Title2 from "../../Typography/Title2";

const Contact = () => {
  return (
    <section className="flex flex-col gap-10 pt-28 pb-20 text-center md:flex-row md:gap-44">
      <div className="md:basis-2/3 md:text-left">
        <Title2>Interested in doing a project together?</Title2>
      </div>
      <div className="md:basis-1/3">
        <Link href="/Contact">
          <a>
            <SecondaryButton textContent="Contact Me" />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
