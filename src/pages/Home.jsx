import React from "react";
import {
  Banner,
  WhyUs,
  OurServices,
  OurBlog,
} from "../components/homeComponents";
import { Testimonial } from "../components/common";
import { motion } from "framer-motion";
import PageAnimate from "../components/common/animation/PageAnimate";

const Home = () => {
  return (
    <PageAnimate >
      <Banner />
      <WhyUs />
      <OurServices />
      <OurBlog />
      <Testimonial />
    </PageAnimate>
  );
};

export default Home;
