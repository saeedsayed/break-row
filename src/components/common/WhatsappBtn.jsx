import React from "react";
import style from "./whatsappBtn.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { createPortal } from "react-dom";

const WhatsappBtn = () => {
  return (
    <>
      {createPortal(
        <a href="#" className={style.whatsappBtn}>
          <FaWhatsapp />
        </a>,
        document.getElementById("portal")
      )}
    </>
  );
};

export default WhatsappBtn;
