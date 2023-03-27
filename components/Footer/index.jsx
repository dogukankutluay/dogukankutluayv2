import React from "react";
import styles from "../../styles/Footer.module.scss";
import { InstagramIcon, LinkedinIcon } from "../../assets/icons";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/favicon.png";
const socialDatas = [
  {
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/do%C4%9Fukan-kutluay-291367198/",
  },
];
function Footer() {
  return (
    <section id="footer" className={styles.footer}>
      <Link passHref href="/">
        <a>
          <Image alt="footer Logo" src={logo} width={50} height={50} />
        </a>
      </Link>
      <p>
        ©2022 Doğukan<span> Kutluay</span>. All Rights Reserved.
      </p>
      <div className={styles.footerSocils}>
        {socialDatas.map((item, index) => {
          return (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={index}
              className={styles.footerSocial}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Footer;
