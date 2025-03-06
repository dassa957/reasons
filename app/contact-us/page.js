"use client"
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import styles from '@styles/ContactPage.module.css';
import { motion } from "framer-motion";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactPage = () => {
  const [sending, setSending] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_6hxpupf", // Replace with your EmailJS service ID
        "template_f9v1x19", // Replace with your EmailJS template ID
        formRef.current,
        "O6hNvpX3RZBLMXfQl" // Replace with your EmailJS public key
      );
      formRef.current.reset();
      setShowBox(true);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send your message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.section 
      id='contact-us' 
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className={styles.grid}>
        <motion.div className={styles.left} variants={fadeIn}>
          <div className={styles.header}>
            <h1 className={styles.heading}>Send us a Message</h1>
            <div className={styles.line}><p>hello</p></div>
          </div>
          <div className={styles.formContainer}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.box}>
                <label>Your Name</label>
                <input 
                  type='text' 
                  name="name"
                  placeholder='Ex: John Doe' 
                  required 
                />
              </div>
              <div className={styles.box}>
                <label>Your Email</label>
                <input 
                  type='email' 
                  name="email"
                  placeholder='Ex: johndoe@gmail.com' 
                  required 
                />
              </div>
              <div className={styles.box}>
                <label>Your Phone</label>
                <input 
                  type='tel' 
                  name="phone"
                  placeholder='Ex: +61 23 456 123' 
                  required 
                />
              </div>
              <div className={styles.box}>
                <label>Your Message</label>
                <textarea 
                  name="message"
                  placeholder='Ex: Hey reasons podcast team...' 
                  required 
                />
              </div>
              <motion.button
                className={styles.btn}
                type='submit'
                whileHover={{ y: -3 }}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div className={styles.right} variants={fadeIn}>
          <div className={styles.header}>
            <h1 className={styles.heading}>Contact us</h1>
            <div className={styles.line}><p>hello</p></div>
          </div>
          <div className={styles.box}>
            <label>Email</label>
            <p>reasonspodcast@gmail.com</p>
          </div>
          <div className={styles.box}>
            <label>Phone</label>
            <p>+61 452 609 931</p>
          </div>
        </motion.div>
      </div>

      {showBox && (
        <motion.div
          className={styles.overlay}
          onClick={() => setShowBox(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={styles.dbox}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.mtext}>Message Sent!</h2>
            <p>Message Sent! We'll get back to you soon.</p>
            <img src='/assets/images/sent.gif' alt='Message sent confirmation' />
            <button 
              className={styles.dbtn} 
              onClick={() => setShowBox(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ContactPage;