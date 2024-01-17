import React from "react";
import styles from "@/styles/About.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const About = () => {
  return (
    <div className={`${styles.main} ${inter.className} ${styles.container}`}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <h2 className={styles.verticalmar}>Introduction</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus illum
        tempora magnam culpa quia perspiciatis facere tempore officiis numquam
        nulla commodi voluptatibus expedita fugit earum, doloribus, esse
        adipisci sequi. Soluta sint natus accusantium dicta? Dicta magnam vero
        dolore. Cumque sunt repellat iste facere praesenti um tenetur fugit illo
        sequi neque nam ullam fugiat voluptate placeat, dolores rem{" "}
      </p>
      <h2 className={styles.verticalmar}>Services Offered By Us</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem
        facilis eos architecto culpa temporibus eveniet non distinctio eaque
        perferendis corrupti est error voluptate debitis accusamus, quisquam
        rerum doloribus aliquam? Saepe, eum vitae vel natus, unde ratione
        ducimus sapiente modi ad dolor, quasi ipsum quibusdam necessitatibus
        itaque molestias quidem aliquid expedita optio possimus beatae ab! Iure
        nihil numquam iusto ipsam! Dignissimos quaerat veniam dolores corporis
        porro maiores illum nesciunt!
      </p>
      <p className={styles.verticalmar}>We Offer Following Services</p>
      <div className={styles.center2}>
        <li>ser</li>
        <li>ser</li>
        <li>ser</li>
        <li>ser</li>
        <li>ser</li>
        <li>ser</li>
        <li>ser</li>
        <li>ser</li>
      </div>

      <h2 className={styles.verticalmar}>Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, impedit
        quos minima aut vitae odit eius in voluptatibus assumenda, sint dolorum
        ab ut deserunt quidem? Ipsum fugiat, vitae quae aliquid, quibusdam
        voluptatem voluptas ad neque, distinctio exercitationem delectus.
        Sapiente atque sit, optio assumenda praesentium neque provident
        cupiditate dolorem ratione ab.
      </p>
    </div>
  );
};

export default About;
