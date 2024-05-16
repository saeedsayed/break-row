import { motion } from "framer-motion";
import { pageVariant } from "../../../data/framerMotionVariant";

const PageAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ x: "100vw" }}
    >
      {children}
    </motion.div>
  );
};

export default PageAnimate;
