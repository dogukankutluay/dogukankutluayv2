import React from "react";
import styles from "../../styles/Banner.module.scss";
import Image from "next/image";
import myProfile from "../../assets/images/dogukan-kutluay-profile.jpeg";

import { InstagramIcon, LinkedinIcon, Github } from "../../assets/icons";
function Banner() {
  return (
    <section id="banner" className={styles.banner}>
      <Image
        className={styles.myAvatar}
        src={myProfile}
        width={300}
        height={300}
        alt="Doğukan Kutluay profil fotoğrafı"
      />
      <div className={styles.myNameWr}>
        <h1>Doğukan</h1>
        <span>KUTLUAY</span>
      </div>
      <p className={styles.desc}>
        Hi, I am Doğukan, I have been involved in many projects under the name
        of MERN stack. Currently, the metaverse universe is among the areas
        where I develop myself, and I do this with the three.js.
      </p>
      <ul className={styles.social}>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/do%C4%9Fukan-kutluay-291367198/"
          >
            <LinkedinIcon />
            <span>linkedin</span>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/dogukan_kutluay/"
          >
            <InstagramIcon />
            <span>instagram</span>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dogukankutluay"
          >
            <Github />
            <span>github</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Banner;
