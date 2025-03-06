"use client";
import Link from "next/link";
import styles from '@styles/End.module.css';
import { motion } from "framer-motion";

const End = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.p 
        className={styles.des}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Want to Contact us?
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Link className={styles.link} href="/contact-us">
          Send us a Message
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default End;