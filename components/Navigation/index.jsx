import React from "react";
import styles from "../../styles/Navigation.module.scss";
import logo from "../../public/favicon.png";
import Image from "next/image";
function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Image width={50} height={50} src={logo} alt="Doğukan kutluay logo" />
      </div>
      <ul className={styles.ul}>
        {/**
       *     <li>
          <a href="#projects">PROJECTS</a>
        </li>
       */}

        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
