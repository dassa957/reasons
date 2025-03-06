"use client";
import { useEffect, useState } from "react";
import styles from '@styles/Youtube.module.css';
import Link from "next/link";
import { motion } from "framer-motion";

export default function YouTubeVideos() {
  const [videos, setVideos] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const toggleBox = (videoId = null) => {
    setSelectedVideoId(videoId);
    setShowBox((prev) => !prev);
  };

  useEffect(() => {
    async function fetchLatestVideos() {
      const channelId = "UCTNWfRvnVFrEN52MX_8Tepg";
      const rssToJsonUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

      try {
        const response = await fetch(rssToJsonUrl);
        const data = await response.json();
        if (!data.items) throw new Error("No videos found");

        const latestVideos = data.items.slice(0, 8).map((item) => ({
          id: item.link.split("v=")[1],
          title: item.title,
        }));
        setVideos(latestVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]);
      }
    }

    fetchLatestVideos();
  }, []);

  const handleConfirm = () => {
    if (selectedVideoId) {
      window.open(`https://www.youtube.com/watch?v=${selectedVideoId}`, "_blank", "noopener,noreferrer");
    }
    toggleBox();
  };

  return (
    <motion.section
      className={styles.container}
      id="recent"
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
          <h1 className={styles.heading}>Latest Episodes</h1>
          <div className={styles.line}>
            <p>hello</p>
          </div>
        </div>
        <Link href="https://youtube.com/@reasonspodcast/video" className={styles.btn}>
          View More
        </Link>
      </motion.div>

      <motion.div 
        className={styles.vCon}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {videos.length > 0 ? (
          videos.map((video) => (
            <motion.div 
              key={video.id} 
              className={styles.box}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={styles.vidBox}>
                <div className={styles.image}>
                  <img
                    className={styles.video}
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                  />
                </div>
                <div className={styles.details}>
                  <p className={styles.name}>
                    {video.title.split(" ").filter((word) => !word.startsWith("#")).slice(0, 10).join(" ")}
                  </p>
                  <p className={styles.text}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleBox(video.id);
                      }}
                      title={video.title}
                    >
                      <i className="fa-solid fa-play" />
                    </a>
                    Listen Now
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p>No videos available</p>
        )}
      </motion.div>

      {showBox && (
        <motion.div 
          className={styles.confirmationBox}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.confirmationContent}>
            <p>Would you like to open this video on YouTube?</p>
            <div className={styles.confirmationButtons}>
              <motion.button 
                className={styles.confirmButton} 
                onClick={handleConfirm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Confirm
              </motion.button>
              <motion.button 
                className={styles.cancelButton} 
                onClick={() => toggleBox()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
}