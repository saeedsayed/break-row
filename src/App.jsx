import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  AboutUs,
  Blogs,
  ContactUs,
  Services,
  OurWorks,
} from "./pages/index";
import MainNavbar from "./components/common/Navbar";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <motion.div animate='visible' initial="hidden">
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="our-works" element={<OurWorks />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </motion.div>
    </>
  );
};

export default App;
