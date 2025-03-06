"use client";
import End from '@components/End';
import styles from '@styles/AboutPage.module.css';
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      id="about-us"
    >
      <div className={styles.header}>
        <motion.h1 
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          >
            About Reasons Podcast
          </motion.h1>
        <div className={styles.line}>
          <p>hello</p>
        </div>
      </div>

      <div className={styles.details}>
        <motion.div 
          className={styles.bgImg}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reasons Podcast is the go-to hub for Sri Lankan F1 fans, bringing you the latest race analysis, breaking news, and in-depth discussions in Sinhala. From thrilling race reviews to behind-the-scenes stories, we cover everything happening in the world of Formula 1. Reasons Podcast is the go-to hub for Sri Lankan F1 fans, bringing you the latest race analysis, breaking news, and in-depth discussions in Sinhala. From thrilling race reviews to behind-the-scenes stories, we cover everything happening in the world of Formula 1. Reasons Podcast is the go-to hub for Sri Lankan F1 fans, bringing you the latest race analysis, breaking news, and in-depth discussions in Sinhala. From thrilling race reviews to behind-the-scenes stories, we cover everything happening in the world of Formula 1.
            </motion.p>
          </div>
          <div 
            className={styles.videoContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              width="930"
              height="523"
              src="https://www.youtube.com/embed/HLEW2vZMmLY"
              title="2023 Japanese Grand Prix එකේ මොකද උනේ ? | REASONS Podcast Ep. 01"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.header}>
        <motion.h1 className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}>Our Mission</motion.h1>
        <div className={styles.line}>
          <p>hello</p>
        </div>
      </div>
      <div className={styles.mission}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reasons Podcast is the go-to hub for Sri Lankan F1 fans, bringing you the latest race analysis, breaking news, and in-depth discussions in Sinhala. From thrilling race reviews to behind-the-scenes stories, we cover everything happening in the world of Formula 1. Reasons Podcast is the go-to hub for Sri Lankan F1 fans, bringing you the latest race analysis, breaking news, and in-depth discussions in Sinhala.
        </motion.p>
      </div>

      <motion.div className={styles.channel}            
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
        <div className={styles.imgContainer}>
          <img src="/assets/images/logo.jpg" alt="Reasons Podcast Logo" />
        </div>
        <div className={styles.channelInfo}>
          <p className={styles.name}>Reasons Podcast</p>
          <p className={styles.subscribers}>On the way to 5k subscribers</p>
        </div>
        <div className={styles.btnContainer}>
          <a
            target="_blank"
            href="https://youtube.com/reasonspodcast"
            className={styles.btn}
            rel="noopener noreferrer"
          >
            Subscribe now
          </a>
        </div>
      </motion.div>

      <End />
    </motion.section>
  );
};

export default AboutPage;