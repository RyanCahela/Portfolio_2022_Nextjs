import React from "react";
import Title2 from "../../Typography/Title2";
import Body2 from "../../Typography/Body2";
import SecondaryButton from "../../Buttons/SecondaryButton";
import Link from "next/link";

const Youtube = () => {
  return (
    <section className="pt-6 pb-16">
      <a id="Youtube" className="relative -top-20"></a>
      <Title2>Youtube Channel</Title2>
      <div className="mt-6 flex flex-col md:flex-row gap-14">
        <iframe
          className="w-full md:w-1/2 aspect-video"
          src="https://www.youtube.com/embed/OmGKFv4Hpf0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <div className="w-full md:w-1/2 py-6 border-b border-t flex flex-col gap-5">
          <Body2>
            Curious about my abilities? I have a YouTube Channel where I
            celebrate software development and share tips and tricks for
            building projects. The motivation for the channel is to solidify
            different topics I&apos;m learning because research shows the best
            way to learn something is to teach it! Another motivation is to have
            a solid example of my workflow and skillset for potential employers.
          </Body2>
          <Link href="https://www.youtube.com/channel/UCYHuuNa4BVfuQW4H_CSQ8YQ/videos">
            <a target="_blank">
              <SecondaryButton textContent="Go to Channel" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
