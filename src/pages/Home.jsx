import React from "react";
import Banner from "../components/homeComponents/Banner";
import WhyUs from "../components/homeComponents/WhyUs";
import OurServices from "../components/homeComponents/OurServices";
import OurBlog from "../components/homeComponents/OurBlog";
import Testimonial from "../components/common/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <WhyUs />
      <OurServices />
      <OurBlog />
      <Testimonial />
    </>
  );
};

export default Home;
