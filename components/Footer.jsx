import styles from '@styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className={styles.logoContainer}>
          <Link href='/'>
            <img src='/assets/images/logo.jpg' className={styles.logo} />
          </Link>

          <p className={styles.des} aria-labelledby="footer-description">
          Reasons Podcast is the go-to hub for Sri Lankan F1 fans, bringing you the latest race analysis, breaking news, and in-depth discussions in Sinhala
          </p>
          <Link href='mailto:reasonspodcast@gmail.com' className={styles.mail} aria-label="Email Reasons Podcast">
              reasonspodcast@gmail.com
          </Link>
        </div>

        <div className={styles.links}>
          <p className={styles.title} id="quick-links">Quick Links</p>
          <Link href='/#home' className={styles.link}>
            Home
          </Link>
          <Link href='/shop' className={styles.link}>
            Shop
          </Link>
          <Link href='/#recent' className={`${styles.link} ${styles.linkBtn}`}>
            Latest
          </Link>
          <Link href='/#about' className={styles.link}>
            About us
          </Link>
          <Link href='/contact-us' className={styles.link}>
            Contact us
          </Link>
        </div>

        <div className={styles.links}>
          <p className={styles.title} id="social-links">Social Links</p>
          <a target='_blank' href='https://youtube.com/reasonspodcast' className={`${styles.link} ${styles.linkBtn}`} rel="noopener noreferrer" title="Email Coffee Stack for inquiries">
            YouTube
          </a>
          <a target='_blank' href='https://www.facebook.com/reasonspodcasr' className={styles.link} rel="noopener noreferrer" title="Visit Coffee Stack's Facebook page">
            Facebook
          </a>
          <a target='_blank' href='mailto:reasonspodcast@gmail.com' className={`${styles.link} ${styles.linkBtn}`} rel="noopener noreferrer" title="Email Coffee Stack for inquiries">
            Discord
          </a>
          <a target='_blank' href='https://www.instagram.com/reasonspodcasr' className={styles.link} rel="noopener noreferrer" title="Follow Coffee Stack on Instagram">
            Instagram
          </a>
          <a target='_blank' href='https://www.tiktok.com/@reasonspodcasr' className={styles.link} rel="noopener noreferrer" title="Follow Coffee Stack on Instagram">
            TikTok
          </a>
        </div>

        <div className={styles.links}>
          <p className={styles.title} id="legal">Contact</p>
          <Link href='mailto:reasonspodcast@gmail.com' className={styles.link} rel="noopener noreferrer" title="Read Luzidhaus's Terms & Conditions">
            Email us
          </Link>
          <Link href='callto:071234567' className={styles.link} rel="noopener noreferrer" title="Read Luzidhaus's Privacy Policy">
            Call us
          </Link>
          <Link href='https://wa.me/123' className={styles.link} rel="noopener noreferrer" title="Read Luzidhaus's Terms & Conditions">
            WhatsApp
          </Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link href="https://luzidhaus.com" className={styles.txt}>Luzidhaus &copy; 2025</Link>
      </div>
    </footer>
  );
};

export default Footer;
