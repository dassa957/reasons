"use client";
import Link from 'next/link';
import styles from '@styles/Hero.module.css';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.error("Playback failed:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      console.log("Duration set:", audioRef.current.duration);
    }
  };

  const seekForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration);
    setCurrentTime(audioRef.current.currentTime);
  };

  const seekBackward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0);
    setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      if (audioRef.current.readyState >= 1) {
        handleLoadedMetadata();
      }
      console.log("Audio element initialized");
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  return (
    <motion.section 
      id="home" 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your Ultimate F1 Sinhala Podcast
        </motion.h1>
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Reasons Podcast is the go-to hub for Sri Lankan F1 fans, bringing you the latest race analysis, breaking news, and in-depth discussions in Sinhala
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link className={styles.btn} href="https://youtube.com/@reasonspodcast">
            Start Listening <i className="fa-solid fa-arrow-right" />
          </Link>
        </motion.div>

        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { title: "2k +", des: "YouTube Subscribers" },
            { title: "2 +", des: "Years of Experience" },
            { title: "65 +", des: "Number of Episodes" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className={styles.gridBox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
            >
              <h3 className={styles.title}>{stat.title}</h3>
              <p className={styles.des}>{stat.des}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.right}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className={styles.mainBox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className={styles.box}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.audioPlayer}>
              <audio
                ref={audioRef}
                src="https://firebasestorage.googleapis.com/v0/b/c-csi-22f8d.firebasestorage.app/o/intro.mp3?alt=media&token=01f9948f-3f1e-400f-bc1b-f8f6d06ff492"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              />
              <motion.div 
                className={styles.details}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className={styles.introDetails}>
                  <h3 className={styles.introName}>Reasons with Yevan David</h3>
                  <p className={styles.introDes}>Reasons Podcast</p>
                </div>
                <div className={styles.like}>
                  <motion.button 
                    onClick={toggleLike} 
                    className={styles.likeBtn}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'} />
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                className={styles.player}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <div className={styles.timeDisplay}>
                  <p className={styles.playedTime}>{formatTime(currentTime)}</p>
                  <p className={styles.fullTime}>22:05</p>
                </div>
              </motion.div>
              <motion.div 
                className={styles.line}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className={styles.timeline}
                />
              </motion.div>

              <motion.div 
                className={styles.buttonContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <div className={styles.played}>
                  <motion.button 
                    onClick={seekBackward} 
                    className={styles.seekBtn}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fa-solid fa-backward" /> <p>10s</p>
                  </motion.button>
                </div>
                <div className={styles.full}>
                  <motion.button 
                    onClick={togglePlay} 
                    className={styles.playBtn}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? (
                      <i className="fa-solid fa-pause" />
                    ) : (
                      <i className="fa-solid fa-play" />
                    )}
                  </motion.button>
                </div>
                <motion.button 
                  onClick={seekForward} 
                  className={styles.seekBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p>10s</p> <i className="fa-solid fa-forward" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
          <motion.img 
            className={styles.mainImg} 
            src="/assets/images/main.png" 
            alt="Main Image"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>

        <motion.div 
          className={styles.hosts}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className={styles.imgContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
          >
            <img src="/assets/images/main-bottom.png" className={styles.mainBottomImg} />
          </motion.div>
          <motion.div 
            className={styles.hostDetails}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <div className={styles.hostsBox}>
              <div className={styles.header}>
                <img src="/assets/images/hosts.png" />
                <h3>Meet the Hosts</h3>
              </div>
              <div className={styles.bottom}>
                <p className={styles.des}>Contact the hosts of Reasons Podcast</p>
                <Link className={styles.linkBtn} href="/#hosts">
                  <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;