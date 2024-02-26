import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // delay: 0.5,
      mass: 0.4, //more mass move slower
      damping: 8, //high means less oscillation
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      className="container order"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
