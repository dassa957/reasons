"use client";
import Link from 'next/link';
import styles from '@styles/Special.module.css';
import { motion } from "framer-motion";

const Special = () => {
  return (
    <div className={styles.bg}>
      <motion.section 
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          First Ever Podcast in Sri Lanka Talking About Formula 1 Motorsport
        </motion.h1>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reasons Podcast is the go-to hub for Sri Lankan F1 fans, bringing you
          the latest race analysis, breaking news, and in-depth discussions in
          Sinhala. From thrilling race reviews to behind-the-scenes stories, we
          cover everything happening in the world of Formula 1
        </motion.p>
        
        <motion.div 
          className={styles.btnContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            target="_blank"
            className={styles.btn}
            href="https://youtube.com/reasonspodcast"
            rel="noopener noreferrer"
          >
            Subscribe Now <i className="fa-brands fa-youtube" />
          </a>
        </motion.div>
        
        <motion.div 
          className={styles.social}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            target="_blank"
            href="https://web.facebook.com/profile.php?id=61552061435827"
            className={styles.socialBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook" />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://www.instagram.com/podcastreasons/"
            className={styles.socialBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://whatsapp.com/reasonspodcast"
            className={styles.socialBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp" />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://discord.com/reasonspodcast"
            className={styles.socialBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-discord" />
          </motion.a>
          <motion.a
            target="_blank"
            href="https://tiktok.com/reasonspodcast"
            className={styles.socialBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok" />
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Special;