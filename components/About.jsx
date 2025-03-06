"use client";
import Link from "next/link";
import styles from '@styles/About.module.css';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          About Reasons Podcast
        </motion.h1>
        <div className={styles.line}>
          <p>hello</p>
        </div>
        <motion.img 
          src="/assets/images/about.png" 
          alt="About Reasons Podcast"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.div>

      <motion.div 
        className={styles.right}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          About Reasons Podcast
        </motion.h1>
        <div className={styles.line}>
          <p>hello</p>
        </div>
        <motion.p 
          className={styles.des}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Kusal is the analytical mind of the trio, always ready with sharp
          insights and witty commentary. A tech enthusiast and pop culture
          junkie, he keeps the discussions lively and grounded. Kusal is the
          analytical mind of the trio, always ready with sharp insights and
          witty commentary. A tech enthusiast and pop culture junkie, he keeps
          the discussions lively and grounded. Kusal is the analytical mind of
          the trio, always ready with sharp insights and witty commentary. A
          tech enthusiast and pop culture junkie, he keeps the discussions
          lively and grounded. Kusal is the analytical mind of the trio, always
          ready with sharp insights and witty commentary. A tech enthusiast and
          pop culture junkie, he keeps the discussions lively and grounded.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.btnContainer}
        >
          <Link href="/about-us" className={styles.btn}>
            Read more...
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;