"use client";

import Hero from "./partials/hero";
import ContactForm from "../../home-sections/contact-form";
import Experience from "./partials/experience";

interface Props {
  page: any;
}

const AboutMe: React.FC<Props> = ({ page }) => {
  const { sections } = page.attributes;

  const aboutHero: any = sections.find(
    (item: any) => item.__component === "sections.about-hero"
  );

  const experience: any = sections.find(
    (item: any) => item.__component === "sections.about-experiences"
  );

  const contactMe: any = sections.find(
    (item: any) => item.__component === "sections.contact-me"
  );

  return (
    <>
      {aboutHero && <Hero content={aboutHero} />}
      {experience && <Experience content={experience} />}
      {contactMe && <ContactForm content={contactMe} />}
    </>
  );
};

export default AboutMe;
