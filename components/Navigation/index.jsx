import React from "react";
import styles from "../../styles/Navigation.module.scss";
import logo from "../../public/favicon.png";
import Image from "next/image";
import Link from 'next/link'
function Navigation() {
  return (
    <header className={styles.header}>
      <Link passHref href="/" className={styles.headerLogo}>
        <Image width={50} height={50} src={logo} alt="Doğukan kutluay logo" />
      </Link>
      <ul className={styles.ul}>
        <li>
          <Link passHref href="#contact">CONTACT</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
