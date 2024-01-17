import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link className={styles.underline} href="../">
          <li>Home</li>
        </Link> 
        <Link className={styles.underline} href="../navbar/about">
          <li>About</li>
        </Link>
        <Link className={styles.underline} href="../navbar/blog">
          <li>Blog</li>
        </Link>
        <Link className={styles.underline} href="../navbar/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
