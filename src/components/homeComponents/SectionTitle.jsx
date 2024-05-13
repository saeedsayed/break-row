import React from "react";
import { motion } from "framer-motion";
import { fadeBottomVariant } from "../../data/framerMotionVariant";
import FadeAnimate from "../common/animation/FadeAnimate";
const SectionTitle = ({ smTitle, bgTitle }) => {
  return (
    <FadeAnimate dir={"ttb"}>
      <div className="text-center mb-5">
        <h3 className="mb-2 h6">{smTitle}</h3>
        <h2>{bgTitle}</h2>
      </div>
    </FadeAnimate>
  );
};

export default SectionTitle;
