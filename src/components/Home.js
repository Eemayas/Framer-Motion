import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "./loader";
import WavingHand from "./Wave";

const buttonVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    //FIXME: Not working
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, type: "tween", duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
      <WavingHand />
    </motion.div>
  );
};

export default Home;
