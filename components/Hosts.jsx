"use client";
import styles from '@styles/Hosts.module.css';
import { motion } from "framer-motion";

const Hosts = () => {
  const hosts = [
    {
      name: 'Vibhath',
      description:
        'Vibhath is a passionate storyteller with a knack for uncovering hidden gems in every conversation. With years of experience in media, he brings a unique perspective and infectious energy to the show.',
      image: '/assets/images/vibhath.png',
      location: 'Australia',
    },
    {
      name: 'Kusal',
      description:
        'Kusal is the analytical mind of the trio, always ready with sharp insights and witty commentary. A tech enthusiast and pop culture junkie, he keeps the discussions lively and grounded.',
      image: '/assets/images/kusal.png',
      location: 'Australia',
    },
    {
      name: 'Vishwa',
      description:
        'Vishwa is the creative soul of the group, blending humor and heart into every episode. With a background in arts and entertainment, he’s the go-to for bold ideas and unexpected takes.',
      image: '/assets/images/vishva.png',
      location: 'Australia',
    },
  ];

  return (
    <motion.section
      id="hosts"
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.column}>
          <h1 className={styles.heading}>Meet the Hosts</h1>
          <div className={styles.line}>
            <p>hello</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {hosts.map((host, index) => (
          <motion.div
            className={styles.box}
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.details}>
              <h3 className={styles.name}>{host.name}</h3>
              <p className={styles.location}>
                <i className="fa-solid fa-location-dot" />
                <span>{host.location}</span>
              </p>
              <p className={styles.des}>{host.description}</p>
            </div>
            <img src={host.image} alt={host.name} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Hosts;
