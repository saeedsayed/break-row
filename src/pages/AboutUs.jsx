// components
import {
  Banner,
  About,
  OurPrinciples,
  WhatDistinguishesUs,
} from "../components/aboutUsComponents";
import PageAnimate from "../components/common/animation/PageAnimate";
import { Testimonial } from "../components/common";

const AboutUs = () => {
  return (
    <PageAnimate>
      <Banner />
      <About />
      <OurPrinciples />
      <WhatDistinguishesUs />
      <Testimonial />
    </PageAnimate>
  );
};

export default AboutUs;
