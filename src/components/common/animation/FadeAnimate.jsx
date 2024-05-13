import React from "react";
import { motion } from "framer-motion";
import {
  fadeBottomVariant,
  fadeInVariant,
  fadeLeftVariant,
  fadeRightVariant,
  fadeTopVariant,
} from "../../../data/framerMotionVariant";

const FadeAnimate = ({ children, dir, ...rest }) => {
  const variants =
    dir == "rtl" //Right to Left direction
      ? fadeLeftVariant
      : dir == "ltr" // Left to Right direction
      ? fadeRightVariant
      : dir == "ttb" //Top to Bottom direction
      ? fadeBottomVariant
      : dir == "btt" //Bottom to Top direction
      ? fadeTopVariant
      : fadeInVariant;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimate;
