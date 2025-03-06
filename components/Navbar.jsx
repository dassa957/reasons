"use client";
import Link from '@node_modules/next/link';
import styles from '@styles/Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav((prev) => !prev);
    }

  return (
    <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src='/assets/images/logo.jpg' />
                </Link>
            </div>
            <div className={styles.details}>
                <p className={styles.welcome}>welcome to</p>
                <p className={styles.name}>Reasons Podcast</p>
            </div>
        </div>

        <div className={`${styles.navigation} ${showNav ? styles.showNav : ""}`}>
            <Link className={styles.link} href="/">Home</Link>        
            <Link className={styles.link} href="/shop">Shop</Link>        
            <Link className={styles.link} href="/#hosts">Hosts</Link>        
            <Link className={styles.link} href="/#about">About</Link>        
        </div>

        <div className={styles.btns}>
            <Link className={styles.email} href="mailto:reasonspodcast@gmail.com"><i className="fa-solid fa-envelope" /></Link>
            <button className={styles.menuBtn} onClick={toggleNav}><i className={showNav ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} /></button>
        </div>
        
    </nav>
  )
}

export default Navbar