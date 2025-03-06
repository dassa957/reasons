"use client";
import styles from '@styles/Shop.module.css';
import { motion } from "framer-motion";

const ShopPage = () => {
  return (
    <motion.section
      id="shop"
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="/assets/images/car-animation2.gif"
        alt="Shop Coming Soon"
      />
      <h3 
        className={styles.text}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        Coming soon...
      </h3>
    </motion.section>
  );
};

export default ShopPage;