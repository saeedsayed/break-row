import React, { useRef } from "react";
import style from "./whatsappBtn.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const WhatsappBtn = () => {
  const target = useRef(null);
  return (
    <>
      <OverlayTrigger
        placement="left"
        overlay={
          <Tooltip style={{ direction: "ltr" }}>
            hello how can we help you?
          </Tooltip>
        }
      >
        <motion.a
          variants={{
            hidden: { x: 100 },
            visible: { x: 0, transition: { duration: 0 } },
          }}
          animate="visible"
          initial="hidden"
          href="#"
          className={`${style.whatsappBtn} shadow-lg`}
          ref={target}
        >
          <FaWhatsapp />
        </motion.a>
      </OverlayTrigger>
    </>
  );
};

export default WhatsappBtn;
