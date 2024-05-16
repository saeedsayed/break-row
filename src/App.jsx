import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  AboutUs,
  Blogs,
  ContactUs,
  Services,
  OurWorks,
} from "./pages/index";
import MainNavbar from "./components/common/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/common/Footer";
import WhatsappBtn from "./components/common/WhatsappButton";
import ToTopBtn from "./components/common/ToTopButton";

const App = () => {
  const location = useLocation();
  return (
    <>
      <motion.div animate="visible" initial="hidden">
        <MainNavbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="our-works" element={<OurWorks />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </motion.div>
      {/* portals */}
      <WhatsappBtn />
      <ToTopBtn />
    </>
  );
};

export default App;
