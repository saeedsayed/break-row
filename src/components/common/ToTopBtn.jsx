import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import style from "./toTopBtn.module.css";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeTopVariant } from "../../data/framerMotionVariant";

const ToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", (_) => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", (_) => {
        if (window.scrollY > 100) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };
  }, []);
  return (
    <>
      {visible &&
        createPortal(
          <motion.button
            className={style.toTopBtn}
            variants={fadeTopVariant}
            initial="hidden"
            animate="visible"
            onClick={handleToTop}
          >
            <IoIosArrowUp />
          </motion.button>,
          document.getElementById("portal")
        )}
    </>
  );
};

export default ToTopBtn;
