import React from "react";
import Banner from "../components/homeComponents/Banner";
import WhyUs from "../components/homeComponents/WhyUs";
import OurServices from "../components/homeComponents/OurServices";
import OurBlog from "../components/homeComponents/OurBlog";

const Home = () => {
  return (
    <>
      <Banner />
      <WhyUs />
      <OurServices />
      <OurBlog />
    </>
  );
};

export default Home;
