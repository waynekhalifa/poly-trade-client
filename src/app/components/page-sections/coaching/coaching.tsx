"use client";

import Hero from "./partials/hero";
import Request from "./partials/request";
import Training from "./partials/training";

interface Props {
  page: any;
}

const Coaching: React.FC<Props> = ({ page }) => {
  const { sections } = page.attributes;

  const hero: any = sections.find(
    (item: any) => item.__component === "sections.coaching-hero"
  );
  const training: any = sections.find(
    (item: any) => item.__component === "sections.coaching-training"
  );
  const request: any = sections.find(
    (item: any) => item.__component === "sections.coaching-request"
  );

  return (
    <>
      {hero && <Hero data={hero} />}
      {training && <Training data={training} />}
      {request && <Request data={request} />}
    </>
  );
};

export default Coaching;
